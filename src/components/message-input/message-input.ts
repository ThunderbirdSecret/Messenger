import Block from "utils/Block";

interface MessageInputProps {
    type?: "text" | "search" 
    placeholder?: string;
    value?: string;
    name?: string;
    onInput?: ()=> void;
    onFocus?: ()=> void;
    onBlur?: ()=> void;
}//добавить событие на v-model с input

export class MessageInput extends Block {
    static cName = "MessageInput"
    constructor({...props}:MessageInputProps){
        super({...props, 
            onBlur: (e: FocusEvent) => {
                let msg = (e.target as HTMLInputElement).value
                console.log(msg)
                if(msg != ""){
                    return this.refs.message.setProps({ value: msg })
                } 
                console.log("пусто")
           },
           onFocus: () => {
            console.log("focus")
           }
        });
    }
    protected render(): string {
        return `
            <div class="w-full">
                {{{Input 
                    type=type
                    name=name
                    class="placeholder:white pl-[6px] h-[28px] bg-select-graphite focus:outline-none w-full rounded-lg"
                    placeholder=placeholder
                    onInput=onInput
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="message"    
                    value=value
                    status=""
                }}} 
            </div>
        `
    }
}
