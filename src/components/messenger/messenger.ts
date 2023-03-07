import ButtonConfirm from "components/button-confirm/button-confirm";
import Input from "components/input/input";
import controller, { MessageInfo } from "services/MessageController";
import Block from "utils/Block";
import template from "./messenger.hbs"
import Message from "components/message/message";
import { withStore } from "utils/store/Store";
import DropDown from "components/drop-down/drop-down";

interface MessengerProps {
    selectedChat: number | undefined;
    messages: MessageInfo[];
    userId: number;
}

  class MessengerBase extends Block<MessengerProps> {
    constructor(props: MessengerProps) {
      super(props);
    }
    protected init() {
      this.children.messages = this.createMessages(this.props);
  
      this.children.dropbutton = new ButtonConfirm ({
        title: "❐",
        class: "w-8 h-8 text-white text-bold",
        events: {click: ()=> this.dropDown()}
      })
      this.children.input = new Input({
        type: "text",
        class: "placeholder:white pl-[6px] h-[28px] bg-select-graphite focus:outline-none w-full rounded-lg",
        placeholder: "Write message",
        name: "message",
        id: "message"
      });

      this.children.dropdown = new DropDown()
  
      this.children.button = new ButtonConfirm({
        title: "➤",
        class: "rounded-full bg-blue text-white mx-2 w-[28px] h-[28px] text-center",
        events: {
          click: () => {
            const input =this.children.input as Input;
            const message = input.getValue();
  
            input.setValue("");
  
            controller.sendMessage(this.props.selectedChat!, message);
          }
        }
      });
    }
  
    protected componentDidUpdate(oldProps: MessengerProps, newProps: MessengerProps): boolean {
      this.children.messages = this.createMessages(newProps);
  
      return true;
    }
  
    dropDown(){
      document.getElementById("dropdown")!.classList.toggle("hidden")
    }

    private createMessages(props: MessengerProps) {
      return props.messages.map(data => {
        return new Message({...data, isMine: props.userId === data.user_id });
      })
    }
  
    protected render(): DocumentFragment {
      console.log(this)
      return this.compile(template, { ...this.props });
    }
  }
  
  const withSelectedChatMessages = withStore(state => {
    const selectedChatId = state.selectedChat;
  
    if (!selectedChatId) {
      return {
        messages: [],
        selectedChat: undefined,
        userId: state.user.id
      };
    }
  
    return {
      messages: (state.messages || {})[selectedChatId] || [],
      selectedChat: state.selectedChat,
      userId: state.user.id
    };
  });
  
  export const Messenger = withSelectedChatMessages(MessengerBase);
