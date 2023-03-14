declare global {
  export type Nullable<T> = T | null;

  export type Keys<T extends Record<string, unknown>> = keyof T;

  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  export type Indexed<T = unknown> = {
    [key in string]: T;
  };

  export interface UserType {
    id: number;
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
    avatar?: string;
  };

  export interface ChatType {
     id: number;
      title: string;
      avatar: string;
      unread_count: number;
      last_message: {
        user: findUser[];
        time: string;
        content: string;
      }
  };

  export interface AppState {
    currentRoutePathname: string;
    view: BlockConstructable | null;
    isLoading: boolean;
    errorMessage: string | null;
    user: UserType | null;
    isAppStarted: boolean;
    chats: Nullable<Array<ChatType>>;
    selectedChat: Nullable<ChatType>;
    isPopupShown: boolean;
  };

  export type ErrorRef = {
    errorRef?: BlockClass;
  };

  interface findUser {
    avatar: string;
    display_name: string;
    email: string;
    first_name: string;
    id: number;
    login: string;
    phone: string;
    second_name: string;
    role?: string;
  }
  export type ParentRefs = ErrorRef & Record<string, BlockClass>;

  export type RefsObject = Record<string, HTMLInputElement>;

  export interface RouteProps {
    pathname: string;
    view: BlockConstructable;
    isPrivate: boolean;
    callback: () => void;
  };

  export type PartialRouteProps = Omit<RouteProps, 'callback'>;

  export interface IRouter {
    routes: Array<Route>;
  }

  export interface SubmitEvent extends Event {
    submitter: HTMLElement;
  }
}

export {};
