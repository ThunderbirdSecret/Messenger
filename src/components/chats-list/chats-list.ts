import { Link } from "components/navigate-button/navigate-button";
import ccontroller from "services/ChatsController";
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
    //@ts-expect-error
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
    text: "Enter the login of your interlocutor",
    func: () => this.newChat(),
    inputId: "modal_input"
  })

}

newChat(){
  let modalInput = document.getElementById("modal_input") as HTMLInputElement

  ccontroller.create(modalInput.value)

  document.getElementById("new_chat")!.classList.add("hidden")
}
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
            ccontroller.selectChat(data.id);
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
