import { Authorization } from "pages/authorization/authorization";
import ChangeData from "pages/changeData/ChangeData";
import ChangePassword from "pages/changePassword/ChangePassword";
import { Dialog } from "pages/dialog/dialog";
import { Page404 } from "pages/page404/page404";
import { Registration } from "pages/registration/registration";
import { Settings } from "pages/settings/settings";
import { renderDOM } from "utils";
import Router from "utils/Router";
import { Store } from "utils/store/Store";

export const routes: Array<PartialRouteProps> = [
  {
    pathname: "/",
    view: Authorization,
    isPrivate: false,
  },
  {
    pathname: "/signUp",
    view: Registration,
    isPrivate: false,
  },
  {
    pathname: "/messenger",
    view: Dialog,
    isPrivate: true,
  },
  {
    pathname: "/settings",
    view: Settings,
    isPrivate: true,
  },
  {
    pathname: "/changeData",
    view: ChangeData,
    isPrivate: true,
  },
  {
    pathname: "/changePassword",
    view: ChangePassword,
    isPrivate: true,
  },
  {
    pathname: "/404",
    view: Page404,
    isPrivate: false,
  },
];


export const initRouter = async (router: Router, store: Store<AppState>) => {
  routes.forEach((route) => {
    router.use(route, () => {
      const isAuthorized = !!store.getState().user;

      if (isAuthorized) {
        if (route.isPrivate) {
          store.setState({ view: route.view, currentRoutePathname: route.pathname });
        } else {
          router.go('/messenger');
        }

        return;
      }

      if ((!route.isPrivate && route.pathname === '/') || route.isPrivate) {
        router.go('/');
        return;
      }

      store.setState({ view: route.view, currentRoutePathname: route.pathname });
    });
  });

  store.on('updated', (prevState, nextState) => {
    if (prevState.currentRoutePathname !== nextState.currentRoutePathname) {
      const Page = nextState.view;
      const newPage = new Page({});

      renderDOM(newPage);
      document.title = `App / ${Page.cName}`;
    }
  });
};
