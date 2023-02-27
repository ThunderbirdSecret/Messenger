import ErrorComponent from "components/error-component/error-component";
import Input from "components/input/input";
import { InputValidate } from "helpers/validate";
import Block from "utils/Block";

export type InputControlledRefs = {
    [key: string]: Input | ErrorComponent;
  };

interface InputControlledProps {
    type?: "phone" | "text" | "password" | "email";
    name?: "login" | "password" | "name" | "second_name" | "display_name" | "email" | "phone" | "message";
    placeholder?: string;
    value?: string;
    error?: string;
    childRef: string;
    status?: string;
    text?: string;
    onInput?: (event: FocusEvent)=> void;
    onFocus?: (event: FocusEvent)=> void;
    onBlur?: (event: FocusEvent)=> void;
    id?: string;
    childInputRef: string;
    events?: {
        input?: (event: FocusEvent)=> void;
        focus?: (event: FocusEvent)=> void;
        blur?: (event: FocusEvent)=> void;
    }
}

export class InputControlled extends Block<InputControlledProps>{
    static cName = "InputControlled";

    constructor({onBlur, onFocus, onInput,...props}:InputControlledProps){
        super({
            ...props,
            onBlur: (event: FocusEvent) => {
                let el = event.target as HTMLInputElement
                //@ts-expect-error
                let err = this.refs.err
                console.log("err ref ",err, "refs ", this.refs )
                InputValidate("blur", el, err, this.refs)
            },
            onInput: (e: FocusEvent) => {
                let inputEl = e.target as HTMLInputElement
                //@ts-expect-error
                let errRef = this.refs.err
                if(errRef.props.text != "" && inputEl.value === ""){
                    let empty = errRef.setProps({ text: "" })
                    return empty
                } 
                return
            }
        }) 
    }

    protected render():string {
        return `
        <div>
            {{{ Input
                class="h-9 w-[280px] bg-transparent focus:outline-none border-b-2 border-blue text-base p-2 text-white"
                type=type
                name=name
                placeholder=placeholder
                ref=childInputRef
                value=value
                onInput=onInput
                onFocus=onFocus
                onBlur=onBlur
                id=id
            }}}
            <div class="text-red pt-2" id="err"> 
                {{{ErrorComponent text=error ref="errRef"}}}
            </div>
        </div>
        `;
    }
}

export default InputControlled;
