
import { initRouter } from "services/initRouter";
import * as components from "./components"
import { startApp } from "services/startApp";
import { registerComponent } from "utils";
import { BlockConstructable } from "utils/RegisterComponent";
import Router from "utils/Router";
import SocketController from "utils/SocketController";
import store, { Store } from "utils/store/Store";

Object.values(components).forEach((Component: BlockConstructable) => {
    registerComponent(Component);
});


declare global {
  interface Window {
    router: Router;
    store: Store<AppState>;
    socketController: SocketController;
  }
}

const router = new Router();
window.router = router;
window.store = store;

const socketController = new SocketController();
window.socketController = socketController;

startApp(store).then(() => {
  initRouter(router, store);
  router.go(window.location.pathname);
});
