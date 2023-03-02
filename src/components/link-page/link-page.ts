import withRouter, { PropsWithRouter } from "helpers/HOCS/WithRouter";
import Block from "utils/Block";

interface LinkPageProps extends PropsWithRouter {
    link?: string;
    to: string;
    linkTitle: string;
    invisibleLink?: string;
    events?: {
        click?: (e: Event) => void;
    }
}

export class LinkPage extends Block<LinkPageProps> {
    static cName = "LinkPage";

    constructor({...props}:LinkPageProps) {
        super({...props, events: {click: ()=> this.navigate()}});
    }

    navigate() {
        this.props.router.go(this.props.to);
      }

    protected render(): string {
        return `
        <button class="text-blue border-none text-base" type="button"> 
            <p>{{linkTitle}}</p>
        </button>
        `
    }
}

export default withRouter(LinkPage);
