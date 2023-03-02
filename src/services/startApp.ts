import { hideLoader, showLoader } from "helpers/VisibleLoader";
import { Store } from "utils/store/Store";
import { getUserInfo } from "./AuthController";
import { UserFromServer } from "api/typesAPI";
import { getAvatar } from "./userData";
import { getChats } from "./chats";
import { transformUserObject } from "helpers/transformers/transformUserObject";


export async function startApp(store: Store<AppState>) {
  try {
    showLoader();

    const user = (await getUserInfo()) as UserFromServer;

    if (user) {
      const avatar = await getAvatar(user);
      const modifiedUser = { ...user, avatar };
      const chats = await getChats();

      if (modifiedUser && chats) {
        store.setState({ user: transformUserObject(modifiedUser), chats });
      }

      return user;
    }
    return null;
  } catch (error) {
    store.setState({ errorMessage: (error as Error).message });
    return null;
  } finally {
    hideLoader();
    store.setState({ isAppStarted: true });
  }
}
