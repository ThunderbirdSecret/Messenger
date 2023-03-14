import BaseApi from "./BaseApi";
import { LoginRequestData, SignupRequestData, UserReq } from "./typesAPI";

export class AuthApi extends BaseApi {
    constructor() {
      super("/auth");
    }
  
    public signin(LoginRequestData: LoginRequestData) {
      return this.http.post("/signin", LoginRequestData);
    }
  
  
    public signup(SignupRequestData: SignupRequestData) {
      return this.http.post("/signup", SignupRequestData);
    }
  
    public reading(): Promise<UserReq> {
      return this.http.get("/user");
    }
  
    public logout() {
      return this.http.post("/logout");
    }
  
    create = undefined;
    update = undefined;
    delete = undefined;
  }
  
  export default new AuthApi();
