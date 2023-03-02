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
    status?: string;
    text?: string;
    onInput?: (event: FocusEvent)=> void;
    onFocus?: (event: FocusEvent)=> void;
    onBlur?: (event: FocusEvent)=> void;
    id?: string;
    // childInputRef: string;
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
                let err = this.refs.errRef
                InputValidate("blur", el, err, this)
            },
            onInput: (event: FocusEvent) => {
                let inputEl = (event.target as HTMLInputElement).value
                //@ts-ignore
                if(!this.refs.errRef.props.text){
                    return
                }
                //@ts-ignore
                if(!inputEl && this.refs.errRef.props.text)
                    this.setProps({value: ""})
                    this.refs.errRef.setProps({text: ""})
                }
            }) 
        }

        // public setValue(value: string) {
        //   return (this.element as HTMLInputElement).value = value;
        // }
        
        // public getName() {
        //   return (this.element as HTMLInputElement).name;
        // }
        
        // public getValue() {
        //   return (this.element as HTMLInputElement).value;
        // }
          

    protected render():string {
        return `
        <div>
            {{{ Input
                class="h-9 w-[280px] bg-transparent focus:outline-none border-b-2 border-blue text-base p-2 text-white"
                type=type
                name=name
                placeholder=placeholder
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
