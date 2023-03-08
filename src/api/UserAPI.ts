import BaseApi from "./BaseApi";
import { ChangePasswordRequestData, GetUserByLoginRequestData, UserReq } from "./typesAPI";


export class UserApi extends BaseApi {
 constructor(){
  super("/user")
 }

reading(): Promise<UserType> {
  return this.http.get("/");
}

 public changeProfile(user: UserReq){
  return this.http.put("/profile", {
                            first_name: user.first_name,
                            second_name: user.second_name,
                            display_name: user.display_name,
                            login: user.login,
                            email: user.email,
                             phone: user.phone
                          })
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

 setAvatar(file: FormData) {
  return this.http.post("/resources", {file})
 }

  update = undefined
  create = undefined
  delete = undefined
}

export default new UserApi;
