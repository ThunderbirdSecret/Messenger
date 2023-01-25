import Block from "utils/Block";

interface SendMessageProps {
    onSubmit?: () => void;
    href?: string;
}

export class SendMessage extends Block {
    static cName = "SendMessage"
    constructor({onSubmit}:SendMessageProps){
        super({events:{submit: onSubmit}})
    }
    protected render(): string {
        return `
            {{{ButtonConfirm class="rounded-full bg-blue">
                <p>
                    
                </p>}}}
            `
    }
}