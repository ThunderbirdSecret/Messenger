import { withStore } from "helpers/HOCS/WithStore";
import Block from "utils/Block";

// interface KeyboardEvent {
//     enterKey: boolean;
// }
interface MessageInputProps {
    type?: "text" | "search" 
    placeholder?: string;
    value?: string;
    name?: string;
    events?: {
        blur: (e: FocusEvent) => void;
        keyup: (e: KeyboardEvent) => void;
    }
}//добавить событие на v-model с input

export class MessageInput extends Block {
    static cName = "MessageInput"
    constructor({...props}:MessageInputProps){
        super({...props, 
            events: {
                blur: (e: FocusEvent) => this.onBlur(e),
                keyup: (e: KeyboardEvent) => this.postMessege(e)
            }
        });
    }

    onBlur (e: FocusEvent) {
        let msg = (e.target as HTMLInputElement).value
        console.log(msg)
        if(msg != ""){
            return this.refs.message.setProps({ value: msg })
        } 
        console.log("пусто")
   }

   postMessege(e: KeyboardEvent){
    if(e.key === "Enter") {
        console.log("нажали ENTER") 
    }
    return
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

//добавить по клавише enter отправку сообщения и записать внутрь чата
const withUser = withStore((state) => ({ ...state.user }))

export default withUser(MessageInput);
