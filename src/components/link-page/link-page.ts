import Block from "utils/Block";

interface LinkPageProps {
    link?: string;
    linkTitle: string;
    onClick?: ()=> void
}

export class LinkPage extends Block {
    static cName = "LinkPage";

    constructor({onClick, ...props}:LinkPageProps) {
        super({...props, events:{ click: onClick}});
    }

    protected render(): string {
        return `
        <a class="text-blue text-center text-base py-6 " href={{link}}> {{linkTitle}}
        </a>
        `
    }
}