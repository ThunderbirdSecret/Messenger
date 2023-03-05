import Input from "components/input/input";
import template from "./avatar.hbs"
import Block from "utils/Block";

interface AvatarProps {
    avatarValue?: any;
}

export default class Avatar extends Block {
    constructor({ ...props}:AvatarProps){
        super({...props});
    }

    init(){
        this.children.uploader = new Input({
            class: "hidden",
            type: "file",
            value: this.props.avatarValue,
            name: "avatar",
            id: "avatar",
            accept: ".png, .jpg, .jpeg",
            events: {change: (e: Event) => this.UploadAvatar(e)}
            })
        }

    UploadAvatar(e: Event) {
        let file = (e.target as HTMLInputElement).files![0]
        let reader = new FileReader()
        
        console.log("el: ", this.refs)
        reader.onloadend = () => {
            let preview = document.getElementById("preview") as HTMLImageElement
            //@ts-expect-error
            preview.src = reader.result;
            console.log(preview!.src)
          }
        
          if (file) {
            reader.readAsDataURL(file);
          } else {
            //@ts-expect-error
            preview.src = "";
          }
        }


    render() {
        return this.compile( template, {...this.props})
    }
}
