import { set } from "helpers/set";
import { MessageInfo } from "services/MessageController";
import Block from "utils/Block";
import { EventBus } from "utils/EventBus";

export enum StoreEvents {
  Updated = "updated"
}

interface State {
  user: UserType;
  chats: ChatType[];
  messages: Record<number, MessageInfo[]>;
  selectedChat?: number;
}

export class Store extends EventBus {
  private state: any = {};

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);

    this.emit(StoreEvents.Updated, this.getState());
  }

  public getState() {
    return this.state;
  }
}

const store = new Store();

// @ts-ignore
window.store = store;

export function withStore<SP extends Partial<any>>(mapStateToProps: (state: State) => SP) {
  return function wrap<P>(Component: typeof Block<SP>){

    return class WithStore extends Component {

      constructor(props: Omit<P, keyof SP>) {
        let previousState = mapStateToProps(store.getState());

        super({ ...(props as P), ...previousState });

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());

          previousState = stateProps;

          this.setProps({ ...stateProps });
        });

      }

    }

  }
}

export default store;
