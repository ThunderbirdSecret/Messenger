import Input from "components/input/input";
import template from "./avatar.hbs"
import Block from "utils/Block";
import uController from "services/UserController";
import { withStore } from "utils/store/Store";

export const hoverImg = {
    union: new Image(),
    default: new Image()
}


hoverImg.union.src = require("asserts/icon/Union-grey.svg")
hoverImg.default.src = require("asserts/images/06.jpg")
interface AvatarProps extends UserType {
    events?: {
        change: (e: Event)=> void;
    }
    src?: string | HTMLImageElement;
    union?: string;
}

 export class Avatar extends Block<AvatarProps>{
    constructor(props:AvatarProps){
        super({...props,
                union: hoverImg.union.src,
                src: props.avatar ? `https://ya-praktikum.tech/api/v2/resources/${props.avatar}` : hoverImg.default.src
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
            events: {change: (e: Event) => this.UpdateAvatar(e)}
            })
        }

     UpdateAvatar(e: Event) {
        const file = (e.target as HTMLInputElement).files![0]
        const fd = new FormData()
        if(file){
            fd.append("avatar", file)
             return uController.changeAvatar(fd)
        } else {
            return console.log("No file")
        }
    }


    render() {
        return this.compile( template, {...this.props})
    }
}

const withUser = withStore((state) => ({ ...state.user }))

export default withUser(Avatar);
