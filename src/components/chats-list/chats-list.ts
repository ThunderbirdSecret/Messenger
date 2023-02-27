import { WebSocketMessage } from "api/typesAPI";
import { WithRouter } from "helpers/HOCS/WithRouter";
import { WithStore } from "helpers/HOCS/WithStore";
import { deleteChat, getChatInfo, openSocket } from "services/chats";
import { Block } from "utils";
import Router from "utils/Router";
import { Store } from "utils/store/Store";

type ChatListProps = {
  router: Router,
  store: Store<AppState>;
  chat: ChatType;
  deleteChatHandler?: () => void;
  events?: Record<string, unknown>;
};


class ChatsList extends Block<ChatListProps> {
  static cName = "ChatsList";
  unreadCount = 0;
  messagesArray: Array<WebSocketMessage> = [];

  constructor(props: ChatListProps) {
    super({
      ...props,
      events: { click: (event: Event) => this.onChatItemClick(event) },
      deleteChatHandler: async () => {
        await deleteChat({ chatId: props.chat.id});
      },
    });
  }



  async onChatItemClick(event: Event) {
    if ((event.target as HTMLElement).tagName === 'BUTTON') {
      return;
    }
    await getChatInfo(this.props.chat);
    const { user, selectedChat } = this.props.store.getState();

    if (user && selectedChat) {
      console.log("open socket" )
      console.log("socket id :", user.id)
      console.log("socket select chat :", selectedChat )
      openSocket(user.id, selectedChat);
     /* let openChat = document.getElementById("openChat") на случай если не будет работать id для отображения страницы с чатами
      let defaultbg = document.getElementById("defaultbg")
      openChat?.classList.remove("hidden")
      defaultbg?.classList.add("hidden")*/

    }
  }

    protected render(): string {
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

export default WithRouter(WithStore(ChatsList));
