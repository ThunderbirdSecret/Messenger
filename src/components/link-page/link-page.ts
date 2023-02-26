import Block from "utils/Block";

interface LinkPageProps {
    link?: string;
    linkTitle: string;
    invisibleLink?: string;
    onClick?: (e: Event)=> void;
    events?: {
        click?: (e: Event) => void;
    }
}

export class LinkPage extends Block<LinkPageProps> {
    static cName = "LinkPage";

    constructor({onClick, ...props}:LinkPageProps) {
        super({...props, events: {click: onClick}});
    }

    protected render(): string {
        return `
        <button class="text-blue border-none text-base" type="button"> 
            <p>{{linkTitle}}</p>
        </button>
        `
    }
}

export default LinkPage;
