import HTTPTransport from "utils/HttpTransport";
import { APIError, ChatFromServer, ChatUsersRequestData, CreateChatRequestData, DeleteChatRequestData, DeleteChatResponseData, ResponseStatus, UnreadCountResponseData, UserFromServer, UserToChatRequestData } from "api/typesAPI";

export default class ChatsAPI extends HTTPTransport {
  createChat = async (data: CreateChatRequestData): Promise<ResponseStatus | APIError> =>
    this.post("chats", { data }) as Promise<ResponseStatus | APIError>;

  deleteChat = async (data: DeleteChatRequestData): Promise<DeleteChatResponseData> =>
    this.delete("chats", { data }) as Promise<DeleteChatResponseData>;

  getChats = async (): Promise<Array<ChatFromServer> | APIError> =>
    this.get("chats") as Promise<Array<ChatFromServer> | APIError>;

  getChatToken = async (chatId: number): Promise<{ token: string }> =>
    this.post(`chats/token/${chatId}`) as Promise<{ token: string }>;

  addUserToChat = async (data: UserToChatRequestData): Promise<ResponseStatus | APIError> => {
    return this.put("chats/users", {
      data: { users: data.users, chatId: data.chat.id },
    }) as Promise<ResponseStatus | APIError>;
  };

  deleteUserFromChat = async (data: UserToChatRequestData): Promise<ResponseStatus | APIError> => {
    return this.delete("chats/users", {
      data: { users: data.users, chatId: data.chat.id },
    }) as Promise<ResponseStatus | APIError>;
  };

  getChatUsers = async (data: ChatUsersRequestData): Promise<Array<UserFromServer> | APIError> => {
    return this.get(`chats/${data.chatId}/users`) as Promise<Array<UserFromServer> | APIError>;
  };

  getUnreadMessagesCount = async (
    data: ChatUsersRequestData
  ): Promise<UnreadCountResponseData | APIError> => {
    return this.get(`/chats/new/${data.chatId}`) as Promise<UnreadCountResponseData | APIError>;
  };
}
