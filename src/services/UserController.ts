import API, { UserApi } from "api/UserAPI";
import { ChangePasswordRequestData, GetUserByLoginRequestData, UserReq } from "api/typesAPI";
import store from "utils/store/Store";

export class UserController {
    private readonly api: UserApi;

    constructor(){
        this.api = API
    }

    async getUser(){
        const user = await this.api.reading()

        store.set("user", user)
    }

    async changeProfile(user: UserReq){
        try {
            await this.api.changeProfile(user)

            store.set("user", user)

            await this.getUser()
        } catch(e: any) {
            console.log(e, "Change profile error")
        }
    }

    async changeAvatar(file: FormData) {
        try {
            const avatar = await this.api.changeAvatar(file)

            // store.set("user", avatar)
            await this.getUser()
        } catch(e) {
            console.log(e, "error aupload avatar")
        }
    }

    async changePassword(passwords: ChangePasswordRequestData){
        try {
            await this.api.changePassword({
                oldPassword: passwords.oldPassword, 
                newPassword: passwords.newPassword
            })
        } catch(e) {
            console.log(e, "error change password")
        }

    }

    async searchUser(data: GetUserByLoginRequestData) {
        try {
            await this.api.userSearch(data).then(
                res => store.set("searchUser", res)
                
            )
        } catch(e){
            console.log(e, "error search")
        }
    }

}

const uController = new UserController()

// @ts-ignore
window.userController = uController;

export default uController
