
import { withStore } from "helpers/HOCS/WithStore";
import { Block } from "utils";

export type UserProps = {
    user?: Nullable<UserType>;
    userData?: Array<any>;
    imageSrc?: string;
    navigateToSet?: (event: PointerEvent) => void;
    navigateToPass?: (event: PointerEvent) => void;
    signout?: (e: Event) => void;
    // getAvatarSrc: (path: string) => void;
  };
  
  export class User extends Block {
    static cName = "User";
  
    avatarSrc = "";
  
    constructor(props: UserProps) {
      super(props);
  
      // const data = props.store.getState().user ? getUserDataArray(props.store.getState().user!) : [];
      // const imageSrc = props.user?.avatar;
      // console.log("data", data, "props", props.store.getState().user,)
      // this.setProps({
      //   userData: data,
      //   imageSrc,
      //   navigateToSet: (event: PointerEvent) => {
      //     event.preventDefault()
      //     this.props.router.go("/changeData");
      //   },
      //   navigateToPass: (event: PointerEvent) => {
      //     event.preventDefault()
      //     this.props.router.go("/changePassword");
      //   },
      //   signout: (e: Event) => {
      //     e.preventDefault()
      //     signout(this.props.store)},
      };
  
    // componentDidUpdate() {
    //   if (this.props.store.getState().currentRoutePathname !== "/settings") {
    //     return false;
    //   }
  
    //   this.children = {};
  
    //   return true;
    // }
  
    render() {
      return `
          <div class="grow flex flex-col justify-center items-center">
                {{{Avatar }}}
                  {{#each userData}}
                    {{#with this}}
                      {{{DataItem title="{{title}}" data="{{data}}"}}}
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
  const withUser = withStore((state) => ({ ...state.user }))

  export default withUser(User);
