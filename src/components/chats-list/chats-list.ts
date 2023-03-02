import { withStore } from "helpers/HOCS/WithStore";
import { Block } from "utils";


type ChatListProps = {
  chat?: ChatType;
  deleteChatHandler?: () => void;
  onChatItemClick?: (event: Event) => void;
  events?: Record<string, unknown>;
};


class ChatsList extends Block {
  static cName = "ChatsList";
  // unreadCount = 0;
  // messagesArray: Array<WebSocketMessage> = [];

  constructor(props: ChatListProps) {
    super({
      ...props,
      events: { 
        click: (event: Event) => this.onChatItemClick(event) },
      deleteChatHandler: async () => {
        // await deleteChat({ chatId: props.chat.id});
        console.log("btn delete work!")
      },
    });
  }

  async onChatItemClick(event: Event) {
    console.log(event.target)

    }

    protected render(): string {
      console.log("chats list: ", this)
        return `
            <div id="chat_item">
                <hr class="border-t-2 border-hr-color w-12/14 mx-[15px] text-white"/>
                <div class="flex items-start gap-x-3 p-2.5 h-[73px] hover:bg-select-graphite" onClick={{onChatItemClick}}>
                    <div class="min-w-[47px] min-h-[47px] rounded-full bg-blue"></div>
                    <div class="flex flex-col gap-y-2">
                        <p class="text-xs mt-auto">{{chat.title}}</p>
                        <p class="max-w-[250px] truncate text-xs">{{chat.lastMessage}}</p>
                    </div>
                    <div class="ml-auto">
                      {{{LinkPage linkTitle="x" onClick=deleteChatHandler}}}
                    </div>
                </div>
            </div>`
    }
}

const withUser = withStore((state) => ({ ...state.user }))

export default withUser(ChatsList);
