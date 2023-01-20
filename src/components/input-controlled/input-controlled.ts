import Block from "utils/Block";
import { InputValidate } from "helpers/validate";

interface InputControlledProps {
    type?: "phone" | "text" | "password" | "email";
    name?: "login" | "password" | "name" | "second_name" | "display_name" | "email" | "phone";
    placeholder?: string;
    value?: string;
    error?: string;
    status?: string;
    text?: string;
    onInput?: ()=> void;
    onFocus?: ()=> void;
}

export class InputControlled extends Block{
    static cName = "InputControlled";

    constructor({...props}:InputControlledProps){
        super({
            ...props,
            onBlur: (event: FocusEvent) => {
                let el = event.target as HTMLInputElement
                let err = this.refs.err
                console.log(err)
                InputValidate("blur", el, err)
        } })
    }

    protected render():string {
        return `
        <form class="">
            {{{ Input
                class="h-9 w-[280px] bg-transparent focus:outline-none border-b-2 border-blue text-base p-2 text-white"
                type=type
                name=name
                placeholder=placeholder
                ref="inputField"
                value=value
                status=status
                onInput=onInput
                onFocus=onFocus
                onBlur=onBlur
            }}}
            <div class="text-red pt-2" id="err"> 
                {{{ErrorComponent text=error ref="err"}}}
            </div>
        </form>
        `;
    }
}