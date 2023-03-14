import BaseApi from "./BaseApi";
import { ChangePasswordRequestData, GetUserByLoginRequestData, UserReq } from "./typesAPI";


export class UserApi extends BaseApi {
 constructor(){
  super("/user")
 }

reading(): Promise<UserType> {
  return this.http.get("/");
}

updateUser(data: UserType) {
  return this.http.put("/", data);
}


 public changeProfile(user: UserReq){
  return this.http.put("/profile", {...user})
 }

 public changeAvatar(file: FormData) {
  return this.http.put("/profile/avatar", file)
 }

 public changePassword(passwords: ChangePasswordRequestData){
  return this.http.put("/password", {...passwords})
 }

 getUser(id: string) {
  return this.http.get(`/${id}`)
 }

 userSearch(data: GetUserByLoginRequestData){
  return this.http.post("/search", {login: data.login})
 }

  create = undefined
  delete = undefined
}

export default new UserApi();
