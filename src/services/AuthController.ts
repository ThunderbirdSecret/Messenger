import AuthApi from "api/AuthApi";
import { LoginRequestData, SignupRequestData } from "api/typesAPI";
import Router from "utils/Router";
import store from "utils/store/Store";


export class AuthController {
  private api = AuthApi

  // constructor() {
  //   this.api = API;
  // }

    async signin(LoginRequestData: LoginRequestData) {
        try{
          await this.api.signin(LoginRequestData)
          await this.getUser()
          store.set("user.error", undefined)

          Router.go("/messenger")
      } catch(e) {
          console.log("Error in SIGN IN")
      }
    }
  
    async signup(SignupRequestData: SignupRequestData) {
      try{
        await this.api.signup(SignupRequestData)
        await this.getUser()

        store.set("user.error", undefined)
        Router.go("/messenger")
      } catch(e) {
        console.log("Error in SIGN UP")
      }
    }
  
    async getUser() {
      store.set(`Loading is user`, true)
  
      const user = await this.api.reading()

      store.set("user", user)//нужно уменьшить связанность
      store.set(`Loading is user`, false)
    }
  
    async logout() {
      try{
        await this.api.logout()
        store.set("user.error", undefined)
        Router.go("/")
    } catch(e) {
      console.log("Error in read user");
    }
  }
}

export default new AuthController();
