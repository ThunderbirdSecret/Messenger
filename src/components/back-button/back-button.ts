import Block from "utils/Block";

interface BackButtonProps {
    path: string;
    onClick?: (e: Event)=>void;
    events?: {
        click?: (e: Event) => void;
      };
}

const back = new Image()
back.src = require("asserts/icon/arrow-lest.svg")

export class BackButton extends Block<BackButtonProps> {
    static cName = "BackButton"

    constructor({ onClick, ...props}:BackButtonProps){
        super({...props, events: { click: onClick } });
    }

    protected render(): string {
        return `
            <button class="rounded-full w-[28px] h-[28px] bg-blue" onClick=onClick>
                <img src=${back.src} alt="back" class="m-auto" />
            </button>
`
    }
}

export default BackButton;
