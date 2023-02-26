import { ChatFromServer, UserFromServer } from "api/typesAPI";
import AuthAPI from "api/AuthorizationAPI";
import { isApiReturnedError } from "helpers/checkers and validators/isApiReturnedError";
import { hideLoader, showLoader } from "helpers/VisibleLoader";
import { Store } from "utils/store/Store";
import { getAvatar } from "./userData";
import { transformUserObject } from "helpers/transformers/transformUserObject";
import { transformChatsObject } from "helpers/transformers/transformChatsObject";
import ChatsAPI from "api/ChatsAPI";
import { DEFAULT_AVATAR } from "constants/imagesPaths";



export type LoginPayload = {
  login: string;
  password: string;
};

export type SignupPayload = {
  login: string;
  password: string;
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
};

const api = new AuthAPI();
const chatsApi = new ChatsAPI();

export const signin = async (store: Store<AppState>, action: LoginPayload) => {
  showLoader();

  try {
    const response = await api.signin(action);

    if (isApiReturnedError(response)) {
      throw new Error(response.reason);
    }

    const user = (await api.getUserInfo()) as UserFromServer;

    if (isApiReturnedError(user)) {
      throw new Error(user.reason);
    }

    const avatar = await getAvatar(user);
    const modifiedUser = { ...user, avatar };

    const chats = (await chatsApi.getChats()) as ChatFromServer[];

    if (isApiReturnedError(chats)) {
      throw new Error(chats.reason);
    }

    store.setState({
      user: transformUserObject(modifiedUser),
      chats: chats.map((chat) => transformChatsObject(chat)),
      errorMessage: "",
    });

    window.router.go("/messenger");
  } catch (error) {
    store.setState({ errorMessage: (error as Error).message });
    window.router.go("/");
  } finally {
    hideLoader();
  }
};

export const signup = async (store: Store<AppState>, action: Partial<UserFromServer>) => {
  showLoader();

  try {
    const response = await api.signup(action);

    if (isApiReturnedError(response)) {
      throw new Error(response.reason);
    }

    const user = {
      ...action,
      ...response,
      display_name: "",
      avatar: DEFAULT_AVATAR,
    } as UserFromServer;
    const chats = (await chatsApi.getChats()) as ChatFromServer[];

    if (isApiReturnedError(chats)) {
      throw new Error(chats.reason);
    }

    store.setState({
      user: transformUserObject(user),
      chats: chats.map((chat) => transformChatsObject(chat)),
      errorMessage: "",
    });

    window.router.go("/messenger");
  } catch (error) {
    store.setState({ errorMessage: (error as Error).message });
  } finally {
    hideLoader();
  }
};

export const signout = async (store: Store<AppState>) => {
  showLoader();

  try {
    const response = await api.signout();

    if (isApiReturnedError(response)) {
      throw new Error(response.reason);
    }
  } catch (error) {
    store.setState({ errorMessage: (error as Error).message });
  } finally {
    hideLoader();
    console.log("Вышел из системы")
    store.setState({
      user: null,
      chats: [],
    });

    window.router.go("/");
  }
};

export const getUserInfo = async () => {
  try {
    const user = await api.getUserInfo();

    if (isApiReturnedError(user)) {
      if (user.reason === "Cookie is not valid") {
        throw new Error("You are not logged in");
      }
      throw new Error(user.reason);
    }

    return user;
  } catch (error) {
    window.store.setState({ errorMessage: (error as Error).message });
    return null;
  }
};
