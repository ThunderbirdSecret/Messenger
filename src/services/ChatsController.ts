import API, { ChatsApi } from "api/ChatsAPI";
import store from "utils/store/Store";
import MessagesController from './MessageController';
import { ChatsAva } from "api/typesAPI";

export class ChatsController {
  private readonly api: ChatsApi;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    try{
      await this.api.create(title);

      this.getChats();
    } catch(e) {
      console.log("Create chat err", e)
    }
  }

  async getChats() {
    try{
      const chats = await this.api.reading();

      chats.map(async (chat: any) => {
        const token = await this.getToken(chat.id);
        if(token){
          await MessagesController.connect(chat.id, token);
        }
      });
      store.set("chats", chats);
    } catch(e) {
      console.log("Create chat error", e)
    }
  }

  async getUsers(chat_id:number){
    try{
        const updateUsers = await this.api.getUsers(chat_id)
          store.set("addUsers", updateUsers)
    
      this.getChats();
    } catch(e) {
      //@ts-expect-error
      console.log("users not found because", e.reason)
    }
  }

  async addUserToChat(userId: number, chat_id: number, ) {
    try{
     await this.api.addUsers( [userId], chat_id);
    } catch(e) {
      console.log("add Uset chat error ", e)
    }
  }

  async delete(id: number) {
    try{
      await this.api.delete(id);

      this.getChats();
    } catch(e){
      console.log("delete error", e)
    }
  }

  async chatsAvatar(chatId: number, avatar: FormData) {
    try {
      const data: ChatsAva = {chatId, avatar}
      await this.api.chatAvatar(data)
    } catch(e) {
      //@ts-expect-error
      alert(e.reason)
    }
  }

  deleteUserToChat(userId: number, chat_id: number, ) {
    this.api.deleteUsers( [userId], chat_id);
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number) {
    store.set("selectedChat", id);
  }

  async commonChat(id: number) {
    try{
      await this.api.getCommon(id)

      store.set("chats", id)

      this.getChats();
    } catch(e){
      console.log("commonChat", e)
    }
  }
}

const ChatController = new ChatsController();

export default ChatController;
