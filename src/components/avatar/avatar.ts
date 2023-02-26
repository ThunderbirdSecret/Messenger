import { WithRouter } from "helpers/HOCS/WithRouter";
import { WithStore } from "helpers/HOCS/WithStore";
import Block from "utils/Block";

interface AvatarProps {
    file: HTMLInputElement & EventTarget;
    onChange?: (e: Event)=> void;
    id?: string;
    value?: string | HTMLInputElement | HTMLImageElement | File
}

const image = new Image()
const icon = new Image()
image.src = require("asserts/images/06.jpg")
icon.src = require("asserts/icon/Union-grey.svg")

export class Avatar extends Block<AvatarProps> {
    static cName = "Avatar";

    constructor({onChange, ...props}:AvatarProps){
        super({...props, 
            onChange: (e: Event) => {
                let file = (e.target as HTMLInputElement).files![0]
                let reader = new FileReader()
                
                console.log("el: ", this.refs)
                reader.onloadend = () => {
                    let preview = document.getElementById("preview")
                    //@ts-expect-error
                    preview.src = reader.result;
                  }
                
                  if (file) {
                    reader.readAsDataURL(file);
                  } else {
                    //@ts-expect-error
                    preview.src = "";
                  }
                }
                // this.refs.image.setProps({ src: target.files![0]})
    });
}

    protected render(): string {
        return `
            <form method="post" enctype="multipart/form-data" class="text-center w-[130px] h-[130px] my-4 cursor-pointer overflow-hidden rounded-full">
                <label>
                {{{Input 
                    class="hidden"
                    type="file"
                    ref="avatar"
                    value=avatarValue
                    name="avatar"
                    id=id
                    accept=".png, .jpg, .jpeg"
                    onChange=onChange
                }}}
                    <figure class="relative w-[130px] h-[130px] ">
                    <img src=${image.src} id="preview" alt="Avatar" class="w-full h-full align-start object-cover" 
                        class="bg-auto rounded-full box-border w-[130px] h-[130px] transition-all ease-linear" >
                        <figcaption class="absolute inset-0 flex justify-center items-center z-10 opacity-0 transition-all ease-linear hover:opacity-100 hover:bg-gray-800/75">
                            <img class="m-auto" alt="icon" src=${icon.src}>
                        </figcaption>
                    </figure>
                </label>
            </form>
        `
    }
}
//@ts-expect-errors
export default WithStore(WithRouter(Avatar));
