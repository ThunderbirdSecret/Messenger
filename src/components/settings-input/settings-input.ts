import { InputValidate } from "helpers/validate";
import Block from "utils/Block";

interface SettingInputProps {
    type?: "phone" | "text" | "password" | "email";
    name?: "login" | "password" | "name" | "second_name" | "display_name" | "email" | "phone";
    placeholder?: string;
    value?: string;
    error?: string;
    status?: string;
    text?: string;
    id?: string;
    onInput?: () => void;
    onBlur?: () => void;
    onFocus?: () => void;
}

export class SettingInput extends Block {

    static cName="SettingInput"
    
    constructor({onInput, onBlur, onFocus, ...props}:SettingInputProps) {
        super({
            ...props,
            onBlur: (event: FocusEvent) => {
                let el = event.target as HTMLInputElement
                let err = this.refs.err
                console.log(el.placeholder)
                 if(!el.value && el.placeholder) {
                    el.value = el.placeholder
                    console.log("данные по умолчанию")
                 }
                InputValidate("blur", el, err, this.refs)
            } 
        })
    }
    protected render(): string {
        return `
            <div class="flex flex-wrap justify-center gap-x-52 w-[510px]">
                <label for="setting" class="mr-auto text-bold">{{label}}</label>
                {{{ Input
                    class="ml-auto bg-transparent text-end focus:outline-none"                    
                    type=type
                    name=name
                    placeholder=placeholder
                    ref="inputSetting"
                    value=value
                    status=status
                    onInput=onInput
                    onFocus=onFocus
                    onBlur=onBlur
                    id=id
                }}}
                <div class="text-red pt-2" id="err"> 
                    {{{ErrorComponent text=error ref="err"}}}
                </div>
            </div>
            
            `
    }
}