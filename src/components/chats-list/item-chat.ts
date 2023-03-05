import { withStore } from "helpers/HOCS/WithStore";
import { Block } from "utils";

interface ChatsItemProps{
    chats?: ChatType;
    events?: { 
        click: (event: Event) => void
    },
    title?: string;
    lastMessage?: string;
    id?: number;
}

class ChatsItem extends Block{
    static cName = "ChatsItem"

    constructor(props:ChatsItemProps){
        super({props, events: { 
            click: (event: Event) => this.onChatItemClick(event) }})

            this.setProps({
                id: props.chats?.id,
                title: props.chats?.title,
                lastMessage: props.chats?.last_message
            })
    }

    async onChatItemClick(event: Event) {
        console.log(event.target)
        }

    protected render(): string {
        console.log("ITEM",this)
        return `
            <div id="chat_item">
                <hr class="border-t-2 border-hr-color w-12/14 mx-[15px] text-white"/>
                <div class="flex items-start gap-x-3 p-2.5 h-[73px] hover:bg-select-graphite" onClick={{onChatItemClick}}>
                    <div class="min-w-[47px] min-h-[47px] rounded-full bg-blue"></div>
                    <div class="flex flex-col gap-y-2">
                        <p class="text-xs mt-auto">{{title}}</p>
                        <p class="max-w-[250px] truncate text-xs">{{lastMessage}}</p>
                    </div>
                    <div class="ml-auto">
                      {{{DeleteChat id="{{id}}" }}}
                    </div>
                </div>
            </div>`
            
    }
}

export const withSelectedChat = withStore(state => ({selectedChat: (state.chats || []).find(({id}) => id === state.selectedChat)}));

export default withSelectedChat(ChatsItem);
