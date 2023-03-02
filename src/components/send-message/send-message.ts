import { withStore } from "helpers/HOCS/WithStore";
import Block from "utils/Block";

interface SendMessageProps {
    onSubmit?: (e: Event) => void;
    events?: {
        submit?: (e: Event) => void;
    }
    href?: string;
}

export class SendMessage extends Block{
    static cName = "SendMessage"
    constructor({onSubmit, ...props}:SendMessageProps){
        super({...props, events: {submit: onSubmit}})
    }
    protected render(): string {
        return `
            {{{ButtonConfirm class="rounded-full bg-blue text-white" value="➤"
               }}}
            `
    }
}

const withUser = withStore((state) => ({ ...state.user }))

export default withUser(SendMessage);
