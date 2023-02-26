import { ChangePasswordRequestData, UserFromServer } from "api/typesAPI";
import UserAPI from "api/UserAPI";
import { DEFAULT_AVATAR } from "constants/imagesPaths";
import { isApiReturnedError } from "helpers/checkers and validators/isApiReturnedError";
import { hideLoader, showLoader } from "helpers/VisibleLoader";
import { transformUserObject } from "helpers/transformers/transformUserObject";
import { Store } from "utils/store/Store";

const api = new UserAPI();

export const changeUserProfile = async (action: Partial<UserFromServer>) => {
  showLoader();

  try {
    const response = await api.changeProfile(action);

    if (isApiReturnedError(response)) {
      throw new Error(response.reason);
    }

    const avatar = window.store.getState()?.user?.avatar || DEFAULT_AVATAR;

    const updatedUser = { ...transformUserObject(response as UserFromServer), avatar };

    window.store.setState({
      user: updatedUser,
    });

    window.router.go("/settings");
  } catch (error) {
    window.store.setState({ errorMessage: (error as Error).message });
  } finally {
    hideLoader();
  }
};

export const changeUserPassword = async (action: ChangePasswordRequestData) => {
  showLoader();

  try {
    const response = await api.changePassword(action);

    if (isApiReturnedError(response)) {
      throw new Error(response.reason);
    }

    window.router.back();
  } catch (error) {
    window.store.setState({ errorMessage: (error as Error).message });
  } finally {
    hideLoader();
  }
};

export const getUserByLogin = async (login: string) => {
  try {
    const users = await api.getUserByLogin({ login });

    if (isApiReturnedError(users)) {
      throw new Error(users.reason);
    }

    return users as UserFromServer[];
  } catch (error) {
    window.store.setState({ errorMessage: (error as Error).message });

    return [];
  }
};

export const getAvatar = async (user: UserFromServer | UserType) => {
  if (!user.avatar) {
    return DEFAULT_AVATAR;
  }

  const blob = (await api.getAvatar(user.avatar)) as Blob;

  return URL.createObjectURL(blob);
};

export const changeAvatar = async (store: Store<AppState>, action: FormData) => {
  showLoader();

  try {
    let newUser = (await api.changeAvatar(action)) as UserFromServer;

    if (isApiReturnedError(newUser)) {
      throw new Error(newUser.reason);
    }

    const avatar = await getAvatar(newUser);

    if (isApiReturnedError(avatar)) {
      throw new Error(avatar.reason);
    }

    newUser = { ...newUser, avatar };

    store.setState({ user: transformUserObject(newUser) });

    return avatar;
  } catch (error) {
    window.store.setState({ errorMessage: (error as Error).message });

    return store.getState().user?.avatar;
  } finally {
    hideLoader();
  }
};
