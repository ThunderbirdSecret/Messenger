import Block from "utils/Block";
import store, { StoreEvents } from "utils/store/Store";

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
