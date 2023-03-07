import BaseApi from "./BaseApi";
import { ChangePasswordRequestData, UserReq } from "./typesAPI";


export class UserApi extends BaseApi {
 constructor(){
  super("/user")
 }

reading(): Promise<UserType> {
  return this.http.get("/");
}

 public changeProfile(user: UserReq){
  return this.http.put("/profile", {user})
 }

 public changeAvatar(file: FormData) {
  return this.http.put("/profile/avatar", {file})
 }

 public changePassword({newPassword, oldPassword}: ChangePasswordRequestData){
  return this.http.put("/password", {oldPassword, newPassword})
 }

 getUser(id: string) {
  return this.http.get(`/${id}`)
 }

 userSearch(login: string){
  return this.http.post("/search", {login})
 }

 setAvatar(file: FormData) {
  return this.http.post("/resources", {file})
 }

  update = undefined
  create = undefined
  delete = undefined
}

export default new UserApi;
