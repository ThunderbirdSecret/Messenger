import Block from "utils/Block";
import { router } from "utils/Router";

export default function withRouter(Component: typeof Block<any>) {
  type Props = typeof Component extends typeof Block<infer P extends Record<string, any>> ? P : any;

  return class WithRouter extends Component {
    constructor(props: Props & PropsWithRouter) {
      super({ ...props, router: router });
    }
  }
}

export interface PropsWithRouter {
  router: typeof router;
}
