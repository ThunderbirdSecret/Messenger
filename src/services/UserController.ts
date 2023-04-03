import API, { UserApi } from "api/UserAPI";
import { ChangePasswordRequestData, GetUserByLoginRequestData, UserReq } from "api/typesAPI";
import store from "utils/store/Store";


export class UserController {
    private readonly api: UserApi;

    constructor(){
        this.api = API
    }

    async getUser(){
        try{
            const user = await this.api.reading()

            store.set("user", user)
        } catch(e){
            console.log("get user catch error on uc", e)
        }
    }

    async changeProfile(user: UserReq){
        try {
            await this.api.changeProfile({
                first_name: user.first_name,
                second_name: user.second_name,
                display_name: user.display_name,
                login: user.login,
                email: user.email,
                phone: user.phone}) 
            store.set("user", user)

        } catch(e: any) {
            console.log(e, "Change profile error")
        }
    }

    async changeAvatar(file: FormData) {        
        try {

            const avatarEl = await this.api.changeAvatar(file)
            store.set("user", avatarEl)
        } catch(e) {
        //@ts-expect-error
            alert(e.reason)
        }
    }

    async changePassword(passwords: ChangePasswordRequestData){
        try {
            await this.api.changePassword({
                oldPassword: passwords.oldPassword, 
                newPassword: passwords.newPassword
            })
        } catch(e) {
        //@ts-expect-error
            alert(e.reason)
        }

    }

    async searchUser(data: GetUserByLoginRequestData) {
        try {
            await this.api.userSearch(data).then(res => store.set("searchUser", res)
                
            )
        } catch(e){
            console.log(e, "error search")
        }
    }

}

const UsersController = new UserController()

export default UsersController
