import withRouter, { PropsWithRouter } from "helpers/HOCS/WithRouter";
import Block from "utils/Block";

interface BackButtonProps extends PropsWithRouter {
    path: string;
    events?: {
        click: () => void;
      };
}

const back = new Image()
back.src = require("asserts/icon/arrow-lest.svg")

class BackButton extends Block<BackButtonProps> {
    static cName = "BackButton"

    constructor(props:BackButtonProps){
        super({...props, events: { click: ()=> this.navigate() } });
    }

    navigate() {
      this.props.router.go(this.props.path);
    }

    protected render(): string {
        return `
            <button class="rounded-full w-[28px] h-[28px] bg-blue" onClick=onClick>
                <img src=${back.src} alt="back" class="m-auto" />
            </button>
`
    }
}

export default withRouter(BackButton)
