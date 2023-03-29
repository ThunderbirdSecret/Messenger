import "./styles/index.css"
import AuthController from "services/AuthController";
import Authorization from "pages/authorization/authorization";
import Registration from "pages/registration/registration";
import { ProfilePage } from "pages/settings/settings";
import { EditProfile } from "pages/changeData/ChangeData";
import ChangePassword from "pages/changePassword/ChangePassword";
import { Dialog } from "pages/dialog/dialog";
import Page404 from "pages/page404/page404";
import { router } from "utils/Router";

enum Routes {
  Authorization = "/",
  Registration = "/signup",
  Settings = "/settings",
  Dialog = "/messenger",
  EditProfile = "/changedata",
  ChangePassword = "/changepassword",
  Page404 = "/404"

}

window.addEventListener("DOMContentLoaded", async () => {
  router
    .use(Routes.Authorization, Authorization)
    .use(Routes.Registration, Registration)
    .use(Routes.Settings, ProfilePage)
    .use(Routes.Dialog, Dialog)
    .use(Routes.EditProfile, EditProfile)
    .use(Routes.ChangePassword, ChangePassword)
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

    router.start()
    if(!isProtectedRoute){
      router.go(Routes.Dialog)


    } 
  } catch(e) {
    router.start()

    if(isProtectedRoute){

      router.go(Routes.Authorization)
      router.go(Routes.Registration)

      }
    }

  })
