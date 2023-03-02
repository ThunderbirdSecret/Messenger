import { deepEqual } from "helpers/checkers and validators/deepEqual";
import { Block } from "utils";
import store, { StoreEvents } from "utils/store/Store";

export function withStore(mapStateToProps: (state: any) => any) {

  return function wrap(Component: typeof Block){
    let currentState: any;


    return class WithStore extends Component {

      constructor(props: any) {
        const state = store.getState()
        currentState = mapStateToProps(state);

        super({ ...props, ...currentState });

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(state);

          if(deepEqual(currentState, stateProps)){
            return
          }

          // currentState = stateProps;

          this.setProps({ ...stateProps });
        });
      }
    }

  }

}
