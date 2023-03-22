import Input from "components/input/input";
import template from "./avatar.hbs"
import Block from "utils/Block";
import UsersController from "services/UserController";
import { withStore } from "utils/store/Store";
import withRouter from "helpers/HOCS/WithRouter";

export const hoverImg = {
    union: new Image(),
    default: new Image()
}

export const avatarUrl = `https://ya-praktikum.tech/api/v2/resources/`


hoverImg.union.src = require("asserts/icon/Union-grey.svg")
hoverImg.default.src = require("asserts/images/06.jpg")
interface AvatarProps extends UserType {
    events?: {
        submit: (e: Event)=> void;
    }
    src?: string | HTMLImageElement;
    union?: string;
}

 export class Avatar extends Block<AvatarProps>{
    constructor(props:AvatarProps){
        super({...props,
                union: hoverImg.union.src,
                src: props.avatar ? `${avatarUrl}${props.avatar}` : hoverImg.default.src
            });
    }

    init(){
        this.children.uploader = new Input({
            class: "hidden",
            type: "file",
            value: this.props.src,
            name: "avatar",
            id: "avatar",
            accept: ".png, .jpg, .jpeg",
            events: {change: (e: Event) => this.updateAvatar(e)}
            })
        }

        // private createAvatar(props: AvatarProps){
        //     return new 
        // }

     async updateAvatar(e: Event) {
        const oldAvatar = this.props.avatar
        const file = (e.target as HTMLInputElement).files![0]
        const fd = new FormData()
        if(file){
            fd.append("avatar", file)
            await UsersController.changeAvatar(fd)
            if(oldAvatar !== this.props.avatar){
             this.setProps({src: `${avatarUrl}${this.props.avatar}`})
            }
        } else {
            return console.log("No file")
        }
    }


    render() {
        return this.compile( template, {...this.props})
    }
}

const withUser = withStore((state) => ({ ...state.user }))

export default withRouter(withUser(Avatar));
