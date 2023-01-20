import Block from "utils/Block";

// interface AvatarProps {
//     src: "string" | HTMLImageElement
// }

const image = new Image()
image.src = require("asserts/sd.png")

//добавить передачу размеров, чтобы можно было вставлять везде + event изменение аватара, если страница edit-settings
export class Avatar extends Block {
    static cName = "Avatar";

    // constructor({src}:AvatarProps){
    //     super({src});
    // }

    protected render(): string {
        return `
            <div class="rounded-full w-[130px] h-[130px] overflow-hidden my-4 cursor-pointer">
                <img src=${image.src} alt="Avatar" class="bg-auto w-[130px] h-[130px] hover:bg-select-graphite" />
            </div>
        `
    }
}