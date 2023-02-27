import { WithRouter } from "helpers/HOCS/WithRouter";
import { WithStore } from "helpers/HOCS/WithStore";
import { getUserDataArray } from "helpers/getUserDataArray";
import { signout } from "services/authorization";
import { Block } from "utils";
import Router from "utils/Router";
import { Store } from "utils/store/Store";

export type UserProps = {
    router: Router;
    store: Store<AppState>;
    user: Nullable<UserType>;
    userData: Array<unknown>;
    imageSrc: string;
    navigateToSet: (event: PointerEvent) => void;
    navigateToPass: (event: PointerEvent) => void;
    signout: (e: Event) => void;
    getAvatarSrc: (path: string) => void;
  };
  
  export class User extends Block<UserProps> {
    static cName = "User";
  
    avatarSrc = "";
  
    constructor(props: UserProps) {
      super(props);
  
      const data = props.user ? getUserDataArray(props.user) : [];
      const imageSrc = props.user?.avatar;
  
      this.setProps({
        userData: data,
        imageSrc,
        navigateToSet: (event: PointerEvent) => {
          event.preventDefault()
          this.props.router.go("/changeData");
        },
        navigateToPass: (event: PointerEvent) => {
          event.preventDefault()
          this.props.router.go("/changePassword");
        },
        signout: (e: Event) => {
          e.preventDefault()
          signout(this.props.store)},
      });
    }
  
    componentDidUpdate() {
      if (this.props.store.getState().currentRoutePathname !== "/settings") {
        return false;
      }
  
      this.children = {};
  
      return true;
    }
  
    render() {
      console.log(this)
      return `
          <div class="grow flex flex-col justify-center items-center">
                {{{Avatar isEditable=true imageSrc=imageSrc}}}
                  {{#each userData}}
                    {{#with this}}
                      {{{UserDataItem title="{{title}}" data="{{data}}"}}}
                    {{/with}}
                  {{/each}}
              <div class="text-blue py-10 mr-auto flex flex-col items-start text-start">
                {{{LinkPage linkTitle="Change profile" onClick=navigateToSet type="button" }}} 
                {{{LinkPage linkTitle="Change password" onClick=navigateToPass }}} 
                {{{LinkPage linkTitle="Log out" onClick=signout}}} 
              </div>
          </div>
          `;
    }
  }
  
  export default WithStore(WithRouter(User));
