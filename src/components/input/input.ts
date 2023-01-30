import Block from "utils/Block";

interface InputProps {
    type?: "phone" | "text" | "password" | "email" | "file";
    placeholder?: string;
    value?: string | HTMLInputElement | HTMLImageElement | File
    name?: "login" | "password" | "first_name" | "second_name" | "display_name" | "email" | "phone";
    status?: string;
    accept?: string;
    id?: string;
    class?: string;
    onInput?: () => void;
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: () => void;
}

export class Input extends Block {
    static cName = 'Input';

    constructor({onInput, onFocus, onBlur, onChange, ...props}: InputProps) {
        super({
            ...props,
            events: {
                input: onInput,
                focus: onFocus,
                blur: onBlur,
                change: onChange,
            }
        });
    }

    protected render(): string {
        return `
        <input
            class="{{class}}"
            type="{{type}}"
            placeholder="{{placeholder}}"
            value="{{value}}"
            name="{{name}}"
            {{status}}
            id="{{id}}"
            accept="{{accept}}"
        >`
    }
}
