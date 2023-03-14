import API, { AuthApi } from "api/AuthApi";
import { LoginRequestData, SignupRequestData } from "api/typesAPI";
import Router from "utils/Router";
import store from "utils/store/Store";
import MessagesController from "./MessageController"


export class AuthController {
  private readonly api: AuthApi;

  constructor() {
    this.api = API;
  }
  async signin(data: LoginRequestData) {
    try {
      await this.api.signin(data).catch( err => alert(err.reason))
      
      await this.getUser();

      Router.go("/messenger");
        
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: SignupRequestData) {
    try {
     const sign = await this.api.signup(data).catch( err => alert(err.reason));
     //@ts-expect-error
      if(sign){
        await this.getUser();

        Router.go("/messenger");
      } 
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async getUser() {
    const user = await this.api.reading();

    store.set("user", user);
  
  }

  async logout() {
    try {
      MessagesController.closeAll();

      await this.api.logout();

      Router.go("/");
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();
