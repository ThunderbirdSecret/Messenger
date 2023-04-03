import BaseApi from "./BaseApi"

export class ChatsApi extends BaseApi {
  constructor() {
    super("/chats")
  }

  create(title: string) {
    return this.http.post("/", {title})
  }

  delete(id: number): Promise<unknown> {
    return this.http.delete("/", { chatId: id });
  }

  reading(): Promise<ChatType[]> {
    return this.http.get("/");
  }

  getUsers(id: number): Promise<Array<findUser>> {
    return this.http.get(`/${id}/users/?offset=0&limit=8`)
  }
  
  getChatUsers(id: number){
    return this.http.post(`/token/${id}`)
  }

  getCommon(id: number): Promise<Array<UserType>> {
    return this.http.get(`/${id}/common`)
  }

  addUsers(users: number[], id: number): Promise<unknown> {
    return this.http.put("/users", { users, chatId: id });
  }

  deleteUsers(users: number[], id: number): Promise<unknown> {
    return this.http.delete("/users", { users, chatId: id });
  }

  chatAvatar(id: number){
    return this.http.put("/avatar", { chat_id: id })
  }

  async getToken(id: number): Promise<string | void> {
    try {
    const response = await this.http.post<{ token: string }>(`/token/${id}`);

    return response.token;
    } catch(e){
      console.log("error get token", e)
    }
  }

  update = undefined;
}

export default new ChatsApi();
