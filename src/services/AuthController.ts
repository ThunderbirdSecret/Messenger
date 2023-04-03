import API, { AuthApi } from "api/AuthApi";
import { LoginRequestData, SignupRequestData } from "api/typesAPI";
import store from "utils/store/Store";
import MessagesController from "./MessageController"
import { router } from "utils/Router";


export class AuthController {
  private readonly api: AuthApi;

  constructor() {
    this.api = API;
  }
  async signin(data: LoginRequestData) {
    try {
      await this.api.signin(data).catch( err => alert(err.reason))
      
      await this.getUser();

      router.go("/messenger");
        
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

        router.go("/messenger");
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

      router.go("/");
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();
