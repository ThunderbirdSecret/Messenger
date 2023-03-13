import API, { ChatsApi } from "api/ChatsAPI";
import store from "utils/store/Store";
import MessagesController from './MessageController';

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
          // this.getUsers(chat.id)

    store.set("chats", chats);
  }

  async getUsers(chat_id:number){
    try{
        await this.api.getUsers(chat_id).then(users => {
          store.set("addUsers", users)
    })
      this.getChats();
    } catch(e) {
      console.log("users not found", e)
    }
  }

  async addUserToChat(userId: number, chat_id: number, ) {
     await this.api.addUsers( [userId], chat_id);
  }

  async delete(id: number) {
    await this.api.delete(id);

    this.getChats();
  }

  deleteUserToChat(userId: number, chat_id: number, ) {
    this.api.addUsers( [userId], chat_id);
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number) {
    store.set("selectedChat", id);
  }

  async commonChat(id: number) {

    await this.api.getCommon(id)

    store.set("chats", id)

    this.getChats();
  }
}

const ccontroller = new ChatsController();

// @ts-ignore
window.chatsController = ccontroller;

export default ccontroller;
