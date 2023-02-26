import { ChatFromServer, CreateChatRequestData, DeleteChatRequestData, UnreadCountResponseData, UserToChatData } from "api/typesAPI";
import { isApiReturnedError } from "helpers/checkers and validators/isApiReturnedError";
import { hideLoader, showLoader } from "helpers/VisibleLoader";
import { transformChatsObject } from "helpers/transformers/transformChatsObject";
import { getUserByLogin } from "./userData";
import { transformUserObject } from "helpers/transformers/transformUserObject";
import ChatsAPI from "api/ChatsAPI";

const api = new ChatsAPI();

export const getChats = async () => {
  showLoader();

  try {
    const response = (await api.getChats()) as ChatFromServer[];

    if (isApiReturnedError(response)) {
      throw new Error(response.reason);
    }

    window.store.setState({
      chats: response.map((item) => transformChatsObject(item)),
    });

    return response.map((item) => transformChatsObject(item));
  } catch (error) {
    window.store.setState({ errorMessage: (error as Error).message });

    return [];
  } finally {
    hideLoader();
  }
};

export const createChat = async (action: CreateChatRequestData) => {
  showLoader();

  try {
    const response = await api.createChat(action);

    if (isApiReturnedError(response)) {
      throw new Error(response.reason);
    }

    await getChats();
    window.router.reload();
  } catch (error) {
    window.store.setState({ errorMessage: (error as Error).message });
  } finally {
    hideLoader();
  }
};

export const deleteChat = async (action: DeleteChatRequestData) => {
  showLoader();

  try {
    const response = await api.deleteChat(action);

    if (isApiReturnedError(response)) {
      throw new Error(response.reason);
    }

    await getChats();
    window.router.reload();
  } catch (error) {
    window.store.setState({ errorMessage: (error as Error).message });
  } finally {
    hideLoader();
  }
};

export const addUserToChat = async (action: UserToChatData) => {
  showLoader();

  try {
    const user = await getUserByLogin(action.login);

    if (isApiReturnedError(user)) {
      throw new Error(user.reason);
    }

    if (!user || user?.length === 0) {
      throw new Error("User not found");
    }

    const response = await api.addUserToChat({ users: [user[0].id], chat: action.chat });

    if (isApiReturnedError(response)) {
      throw new Error(response.reason);
    }

    const { chatUsers } = action.chat;

    const selectedChat = {
      ...action.chat,
      chatUsers: chatUsers ? [...chatUsers, transformUserObject(user[0])] : [],
    };

    window.store.setState({ selectedChat });
  } catch (error) {
    window.store.setState({ errorMessage: (error as Error).message });
  } finally {
    hideLoader();
  }
};

export const deleteUserFromChat = async (action: UserToChatData) => {
  showLoader();

  try {
    const user = await getUserByLogin(action.login);

    if (isApiReturnedError(user)) {
      throw new Error(user.reason);
    }

    if (!user || user?.length === 0) {
      throw new Error("User not found");
    }

    const response = await api.deleteUserFromChat({ users: [user[0].id], chat: action.chat });

    if (isApiReturnedError(response)) {
      throw new Error(response.reason);
    }

    const { chatUsers } = action.chat;

    const selectedChat = {
      ...action.chat,
      chatUsers: chatUsers ? chatUsers.filter((item) => item.login !== action.login) : [],
    };

    window.store.setState({ selectedChat });
  } catch (error) {
    window.store.setState({ errorMessage: (error as Error).message });
  } finally {
    hideLoader();
  }
};

export const getChatInfo = async (action: ChatType) => {
  showLoader();

  try {
    const { token } = await api.getChatToken(action.id);

    if (isApiReturnedError(token)) {
      throw new Error(token.reason);
    }

    const users = await api.getChatUsers({ chatId: action.id });

    if (isApiReturnedError(users)) {
      throw new Error(users.reason);
    }

    const selectedChat = {
      ...action,
      chatUsers: users.map((user) => transformUserObject(user)),
      chatToken: token,
    };

    window.store.setState({ selectedChat });
  } catch (error) {
    window.store.setState({ errorMessage: (error as Error).message });
  } finally {
    hideLoader();
  }
};

export const openSocket = (id: number, chat: ChatType) => {
  window.socketController.initSocket(id, chat);
};

export const sendMessage = (message: string, chat: ChatType) => {
  const socket = window.socketController.socketsMap.get(chat.id)?.socket;
  const messageObject = {
    content: message,
    type: "message",
  };

  socket?.send(JSON.stringify(messageObject));
};

export const getUnreadMessagesCount = async (action: ChatType) => {
  try {
    const unreadCount = await api.getUnreadMessagesCount({ chatId: action.id });

    if (isApiReturnedError(unreadCount)) {
      throw new Error(unreadCount.reason);
    }

    return unreadCount as UnreadCountResponseData;
  } catch (error) {
    window.store.setState({ errorMessage: (error as Error).message });
    return 0;
  }
};
