import Block from "utils/Block";

interface ErrorComponentProps {
    text?: string;
}

export class ErrorComponent extends Block <ErrorComponentProps>{
    static cName = "ErrorComponent"

    protected render(): string {
        return `
        <p class="text-center text-xs">
            {{text}}
        </p>`
    }
}