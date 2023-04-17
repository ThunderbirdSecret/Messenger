import { avatarUrl, hoverImg } from "components/avatar/avatar";
import Input from "components/input/input";
import ChatController from "services/ChatsController";
import Block from "utils/Block";
import template from "./chats-avatar.hbs"




hoverImg.union.src = require("asserts/icon/Union-grey.svg")
hoverImg.default.src = require("asserts/images/06.jpg")
interface AvatarChatsProps {
    events?: {
        submit: (e: Event)=> void;
    }
    src?: string | HTMLImageElement;
    union?: string;
    chat_id: number;
    avatar: string | HTMLImageElement | null
}

 export class AvatarChats extends Block<AvatarChatsProps>{
    constructor(props:AvatarChatsProps){
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
            console.log()
            await ChatController.chatsAvatar(this.props.chat_id, fd)
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
