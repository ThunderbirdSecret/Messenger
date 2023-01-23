import { InputValidate } from "helpers/validate";
import Block from "utils/Block";

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
    onBlur?: ()=> void;
    id?: string;
}

export class InputControlled extends Block{
    static cName = "InputControlled";

    constructor({...props}:InputControlledProps){
        super({
            ...props,
            onBlur: (event: FocusEvent) => {
                let el = event.target as HTMLInputElement
                let err = this.refs.err
                InputValidate("blur", el, err, this.refs)
            },
        })
    }

    protected render():string {
        return `
            {{{ Input
                class="h-9 w-[280px] bg-transparent focus:outline-none border-b-2 border-blue text-base p-2 text-white"
                type=type
                name=name
                placeholder=placeholder
                ref="inputControlled"
                value=value
                onInput=onInput
                onFocus=onFocus
                onBlur=onBlur
                id=id
            }}}
            <div class="text-red pt-2" id="err"> 
                {{{ErrorComponent text=error ref="err"}}}
            </div>
        `;
    }
}