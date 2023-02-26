import { deepEqual } from "helpers/checkers and validators/deepEqual";
import { BlockClass } from "utils/Block";

type WithUserProps = { user: Nullable<UserType> };

export function WithUser<P extends WithUserProps>(WrappedBlock: BlockClass<P>) {
  // @ts-expect-error No base constructor has the specified
  return class extends WrappedBlock<P> {
    public static cName = WrappedBlock.cName || WrappedBlock.name;

    constructor(props: P) {
      super({ ...props, user: window.store.getState().user });
    }

    private __onChangeUserCallback = (prevState: AppState, nextState: AppState) => {
      if (deepEqual(prevState, nextState)) {
        // @ts-expect-error this is not typed
        this.setProps({ ...this.props, user: nextState.user });
      }
    };

    componentDidMount(props: P) {
      super.componentDidMount(props);
      window.store.on("updated", this.__onChangeUserCallback);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      window.store.off("updated", this.__onChangeUserCallback);
    }
  } as BlockClass<Omit<P, "user">>;
}
