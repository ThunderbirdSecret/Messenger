import { Link } from "components/navigate-button/navigate-button";
import ChatController from "services/ChatsController";
import Block from "utils/Block";
import { withStore } from "utils/store/Store";
import { Chat } from "./item-chat";
import template from "./chats-list.hbs"
import Input from "components/input/input";
import WindowModal from "components/window-modal/window-modal";
import ButtonConfirm from "components/button-confirm/button-confirm";

interface ChatsListProps {
  chats: ChatType[];
  isLoaded: boolean;
}

class ChatsListBase extends Block<ChatsListProps> {
  constructor(props: ChatsListProps) {
    super({...props});
  }

  protected init() {
    this.children.chats = this.createChats(this.props);
    
    this.children.profileLink = new Link({ path: "/settings", title: "Профиль"});
 

  this.children.search = new Input({
    id: "search",
    value: "",
    placeholder: "search",
    type: "text",
    class: "placeholder:white pl-[6px] h-[28px] bg-select-graphite focus:outline-none customw rounded-lg m-2"
  })

  this.children.openModal = new ButtonConfirm ({
    title: "New chat +",
    class: "link-page",
    events: {
      click: () => document.getElementById("new_chat")!.classList.remove("hidden")
    }
  })
  this.children.newchat = new WindowModal({
    id: "new_chat",
    text: "Enter name for new chat",
    func: () => this.newChat(),
    inputId: "modal_input",
    btn: "Create chat"
  })

}

newChat(){
  let modalInput = document.getElementById("modal_input") as HTMLInputElement

  ChatController.create(modalInput.value)

  document.getElementById("new_chat")!.classList.add("hidden")
}

//@ts-expect-error
protected componentDidUpdate(oldProps: ChatsListProps, newProps: ChatsListProps): boolean {
    this.children.chats = this.createChats(newProps);

    return true;
  }

  private createChats(props: ChatsListProps) {
    return props.chats.map(data => {
      return new Chat({
        ...data,
        events: {
          click: () => {
            ChatController.selectChat(data.id);
            ChatController.getUsers(data.id)
          }
        }
      });
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template, {...this.props});
  }
}

const withChats = withStore((state) => ({chats: [...(state.chats || [])]}));

export const ChatsList = withChats(ChatsListBase);
