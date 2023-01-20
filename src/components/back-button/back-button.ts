import Block from "utils/Block";

interface BackButtonProps {
    path: string;
}

const back = new Image()
back.src = require("asserts/icon/arrow-lest.svg")

export class BackButton extends Block {
    static cName = "BackButton"

    constructor({...props}:BackButtonProps){
        super(props);
    }

    protected render(): string {
        return `
        <a href={{path}} >
            <button class="rounded-full w-[28px] h-[28px] bg-blue">
                <img src=${back.src} alt="back" class="m-auto" />
            </button>
        </a>
`
    }
}