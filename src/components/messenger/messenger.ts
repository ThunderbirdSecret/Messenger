import ButtonConfirm from "components/button-confirm/button-confirm";
import Input from "components/input/input";
import Block from "utils/Block";
import template from "./messenger.hbs"
import Message from "components/message/message";
import { withStore } from "utils/store/Store";
import DropDown from "components/drop-down/drop-down";
import UserMenu from "components/user-menu/user-menu";
import WindowModal from "components/window-modal/window-modal";
import controller, { MessageInfo } from "services/MessageController";
import { GetUserByLoginRequestData } from "api/typesAPI";
import uController from "services/UserController";
import ccontroller from "services/ChatsController";

interface MessengerProps {
    selectedChat: number | undefined;
    messages: MessageInfo[];
    userId: number;
    searchUser: UserType[]
}

  class MessengerBase extends Block<MessengerProps> {
    constructor(props: MessengerProps) {
      super(props);
    }
    protected init() {
      this.children.messages = this.createMessages(this.props);
  
      this.children.droppoint = new ButtonConfirm({
        title: "⋮",
        class: "text-white text-center bg-transparent text-bold w-5 h-5 rounded-full hover:bg-select-graphite",
        events: {click:() => this.UserMenu()}
      })

      this.children.addUser = new UserMenu({
        title: "Add user",
        events: {
          click: () => this.AddUser()
        }
      })

      this.children.deleteUser = new UserMenu({
        title: "Delete user",
        events: {
          click: () => this.DeleteUser()
        }
      })

      this.children.addUserWindow = new WindowModal ({
        text: "Print user login",
        id: "window-add",
        func: () => this.AddUserChat(),
        inputId: "input-add"
      })

      this.children.deleteUserWindow = new WindowModal ({
        text: "Delete user from chat",
        id: "window-delete",
        func: () => this.DeleteUserChat(),
        inputId: "input-delete"
      })

      
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

    AddUser(){
      document.getElementById("window-add")!.classList.remove("hidden")
    }

    DeleteUser() {
      document.getElementById("window-delete")!.classList.remove("hidden")
    }
  
    dropDown(){
      document.getElementById("dropdown")!.classList.toggle("hidden")
    }

    UserMenu(){
      console.log("click")
      document.getElementById("user-menu")?.classList.toggle("hidden")
    }

    async AddUserChat() {
      console.log("add user", this)
      const modalInput = document.getElementById("input-add") as HTMLInputElement
      console.log(modalInput.value)
      const user = { login: modalInput.value}
      console.log(user)
      await uController.searchUser(user as GetUserByLoginRequestData)
      let users = this.props.searchUser
      console.log("USERS", users)
      if(users){
        const p = document.createElement("p")
        p.className = "text-sm text-white p-2"
        modalInput.after(p)
        users.map((item) => {
          p.innerText = `User: ${item.login}  name: ${item.first_name}`
          let chat_id = this.props.selectedChat!
          ccontroller.addUserToChat( item.id, chat_id)
        })}
         
        
      //  = `Users${this.props.searchUser}`
      // console.log("res",  res.then())
    }

    DeleteUserChat() {
      console.log("А тут будет удалить")
    }

    private createMessages(props: MessengerProps) {
      return props.messages.map(data => {
        return new Message({...data, isMine: props.userId === data.user_id });
      })
    }
  
    protected render(): DocumentFragment {
      console.log(this.props)
      return this.compile(template, { ...this.props });
    }
  }
  
  const withSelectedChatMessages = withStore(state => {
    const selectedChatId = state.selectedChat;
  
    if (!selectedChatId) {
      return {
        messages: [],
        selectedChat: undefined,
        userId: state.user.id,
        searchUser: undefined
      };
    }
  
    return {
      messages: (state.messages || {})[selectedChatId] || [],
      selectedChat: state.selectedChat,
      userId: state.user.id,
      searchUser: (state.searchUser || {})
    };
  });
  
  export const Messenger = withSelectedChatMessages(MessengerBase);
