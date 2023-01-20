import Block from "utils/Block";

interface SettingInputProps {
    placeholder?: string;
    disabled?: string;
    name: string;
    label?: string;
    type: "text" | "password" | "email" | "phone";
    onInput?: () => void;
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: () => void;
}

export class SettingInput extends Block {

    static cName="SettingInput"
    
    constructor({onInput, onBlur, onFocus, onChange, ...props}:SettingInputProps) {
        super({...props, events: {
            input: onInput,
            blur: onBlur,
            focus: onFocus,
            change: onChange
        }},)
    }
    protected render(): string {
        return `
            <div class="flex flex-row justify-center gap-x-52 w-[510px]">
                <label for="setting" class="mr-auto text-bold">{{label}}</label>
                <input type={{type}} id="setting" name={{name}} placeholder={{placeholder}} class="ml-auto bg-transparent text-end focus:outline-none" {{status}} >
            </div>
            `
    }
}