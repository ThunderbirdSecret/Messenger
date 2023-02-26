import { BlockClass } from "utils/Block";
import Router from "utils/Router";

type WithRouterProps = { router: Router };

export function WithRouter<P extends WithRouterProps>(WrappedBlock: BlockClass<P>) {
  // @ts-expect-error No base constructor has the specified number of type arguments
  return class extends WrappedBlock<P> {
    public static cName = WrappedBlock.cName || WrappedBlock.name;

    constructor(props: P) {
      super({ ...props, router: window.router });
    }
  } as BlockClass<Omit<P, "router">>;
}
