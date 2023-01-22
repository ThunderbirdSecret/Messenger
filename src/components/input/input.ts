import Block from "utils/Block";

interface InputProps {
    type?: "phone" | "text" | "password" | "email" | "file";
    placeholder?: string;
    value?: string;
    name?: "login" | "password" | "name" | "second_name" | "display_name" | "email" | "phone";
    status?: string;
    accept?: string;
    id?: string;
    class?: string;
    onInput?: () => void;
    onBlur?: () => void;
    onFocus?: () => void;
    onPick?: () => void;
}

export class Input extends Block {
    static cName = 'Input';

    constructor({onInput, onFocus, onBlur, onPick, ...props}: InputProps) {
        super({
            ...props,
            events: {
                input: onInput,
                focus: onFocus,
                blur: onBlur,
                change: onPick,
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
            {{#if accept}}accept={{accept}}{{/if}}
        >`
    }
}