import { ChatsList } from "components/chats-list/chats-list";
import template from "./dialog.hbs"
import Block from "utils/Block";
import { Messenger } from "components/messenger/messenger";
import ChatController from "services/ChatsController";


const icon = new Image()
icon.src = require("asserts/threepoint.svg")

export class Dialog extends Block {
  constructor() {
    super({});
  }

  protected init() {
    this.children.chatsList = new ChatsList({ isLoaded: false });

    this.children.messenger = new Messenger({});

    ChatController.getChats().finally(() => {
      (this.children.chatsList as Block).setProps({
        isLoaded: true
      })
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, {  })
  }
}
