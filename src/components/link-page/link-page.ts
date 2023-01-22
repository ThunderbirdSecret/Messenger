import Block from "utils/Block";

interface LinkPageProps {
    link?: string;
    linkTitle: string;
    invisibleLink?: string;
    onClick?: ()=> void;
}

export class LinkPage extends Block {
    static cName = "LinkPage";

    constructor({onClick, ...props}:LinkPageProps) {
        super({...props, events:{ click: onClick}});
    }

    protected render(): string {
        return `
        <a class="text-blue text-base py-6" href="{{link}}"> 
            <p>{{linkTitle}}</p>
        </a>
        `
    }
}