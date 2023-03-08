import API, { ChatsApi } from "api/ChatsAPI";
import store from "utils/store/Store";
import MessagesController from './MessageController';
import uController from "./UserController";
import { GetUserByLoginRequestData } from "api/typesAPI";

export class ChatsController {
  private readonly api: ChatsApi;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    await this.api.create(title);

    this.getChats();
  }

  async getChats() {
    const chats = await this.api.reading();

    chats.map(async (chat: any) => {
      const token = await this.getToken(chat.id);

      await MessagesController.connect(chat.id, token);
    });

    store.set("chats", chats);
  }

  addUserToChat(userId: number, chat_id: number, ) {
    this.api.addUsers( [userId], chat_id);
  }

  async delete(id: number) {
    await this.api.delete(id);

    this.getChats();
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number) {
    store.set('selectedChat', id);
  }

  async commonChat(id: number) {

    await this.api.getCommon(id)

    store.set("chat", id)

    this.getChats();
  }
}

const ccontroller = new ChatsController();

// @ts-ignore
window.chatsController = ccontroller;

export default ccontroller;
