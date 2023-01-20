import Block from "utils/Block";

interface MessageInputProps {
    name: string;
    placeholder?: string;
}//добавить событие на v-model с input

export class MessageInput extends Block {
    static cName = "MessageInput"
    constructor({...props}:MessageInputProps){
        super(props);
    }
    protected render(): string {
        return `
            <div class="w-full">
                <input type="text" name={{name}}
                    class="placeholder:white pl-[6px] h-[28px] bg-select-graphite focus:outline-none w-full rounded-lg"
                    placeholder={{placeholder}} >
            </div>
        `
    }
}