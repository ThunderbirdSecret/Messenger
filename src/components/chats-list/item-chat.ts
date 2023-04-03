import Block from "utils/Block";
import template from "./item-chat.hbs"
import { withStore } from "utils/store/Store";
import ButtonConfirm from "components/button-confirm/button-confirm";
import ChatController from "services/ChatsController";
import { avatarUrl } from "components/avatar/avatar";

interface ChatProps {
    id: number;
    avatar: string | HTMLImageElement | null;
    title: string;
    unread_count: number;
    selectedChat: ChatType;
    last_message?: string;
    src?: string | HTMLImageElement;
    events: {
      click: (e?: Event) => void;
    }
  }
  
  class ChatBase extends Block<ChatProps> {
    constructor(props: ChatProps) {
      super({...props,
        src: props.avatar ? `${avatarUrl}${props.avatar}` : undefined})
    }
  
    init() {
      this.children.delete = new ButtonConfirm({
        title: "x",
        class: "link-page",
        events: { click: ()=> this.delete()}
      })
    }

     
    // getAvatarChat(){
    //   ChatController.chatsAvatar(this.props.id)
    // }

    delete() {
      ChatController.delete(this.props.id)
    }
    protected render(): DocumentFragment {
      return this.compile(template, {...this.props, isSelected: this.props.id === this.props.selectedChat?.id });
    }
  }
  
  export const withSelectedChat = withStore(state => ({selectedChat: (state.chats || []).find(({id}) => id === state.selectedChat)}));
  
  export const Chat = withSelectedChat(ChatBase);
