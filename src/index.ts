
import * as components from "./components"
import { registerComponent } from "utils";
import { BlockConstructable } from "utils/RegisterComponent";
import Router from "utils/Router";
import AuthController from "services/AuthController";
import Authorization from "pages/authorization/authorization";
import Page404 from "pages/page404/page404";
import Registration from "pages/registration/registration";

Object.values(components).forEach((Component: BlockConstructable) => {
    registerComponent(Component);
});

enum Routes {
  Authorization = "/",
  Registration = "/signup",
  // Settings = "/settings",
  // Dialog = "/messenger",
  // ChangeData= = "/changedata",
  // ChangePassword = "/changepassword",
  Page404 = "/404"

}

window.addEventListener("DOMContentLoaded", async () => {
  Router
    .use(Routes.Authorization, Authorization)
    .use(Routes.Registration, Registration)
    // .use(Routes.Settings, Settings)
    // .use(Routes.Dialog, Dialog)
    // .use(Routes.ChangeData, ChangeData)
    // .use(Router.ChangePassword, ChangePassword)
    .use(Routes.Page404, Page404)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Authorization:
    case Routes.Registration:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.getUser()

    Router.start()
    if(!isProtectedRoute){
      Router.go(Routes.Authorization)

    } 
  } catch(e) {
    Router.start()

    if(isProtectedRoute){
      Router.go(Routes.Page404)
      }
    }

  })
// const socketController = new SocketController();
// window.socketController = socketController;

// startApp(store).then(() => {
//   initRouter(router, store);
//   router.go(window.location.pathname);
