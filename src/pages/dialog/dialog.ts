// import { Input, MessageInput } from "components"
import { ChatsList } from "components/chats-list/chats-list";
import template from "./dialog.hbs"
import Block from "utils/Block";
import { Messenger } from "components/messenger/messenger";
import controller from "services/ChatsController";

// type DialogProps = {
//     chats?: Nullable<Array<ChatType>>;
//     events?: Record<string, unknown>;
//     toggleShowChatMenu?: () => void;
//     toggleShowAddUserForm?: () => void;
//     toggleShowDeleteUserForm?: () => void;
//     onClick?: (e: Event) => void;
// }

const icon = new Image()
icon.src = require("asserts/threepoint.svg")

export class Dialog extends Block {
  constructor() {
    super({});
  }

  protected init() {
    this.children.chatsList = new ChatsList({ isLoaded: false });

    this.children.messenger = new Messenger({});

    controller.getChats().finally(() => {
      (this.children.chatsList as Block).setProps({
        isLoaded: true
      })
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, {  })
  }
}
