import { WithRouter } from "helpers/HOCS/WithRouter";
import { WithUser } from "helpers/HOCS/WithUser";
import { Block } from "utils";
import Router from "utils/Router";
import { Store } from "utils/store/Store";


export interface SettingsProps {
    user: Nullable<UserType>;
    router: Router;
    store: Store<AppState>;
    navigateBack?: () => void;
  }
  
  export class Settings extends Block<SettingsProps> {
    static cName = "Settings";
  
    constructor(props: SettingsProps) {
      super(props);
  
      this.setProps({ navigateBack: () => window.router.go("/messenger") });
    }
  
    // componentDidUpdate() {
    //   if (this.props.store.getState().currentRoutePathname !== "/settings") {
    //     return false;
    //   }
  
    //   this.children = {};
  
    //   return true;
    // }

    render() {
      console.log("user внутри детей ", this.children)
      return `
          <main class="h-screen">
              {{{Loader}}}
              <div class="flex px-2">
                <div class="mr-auto my-auto flex-none border-none">
                  {{{BackButton onClick=navigateBack}}}
                </div>
                
                <section class="grow flex flex-col gap-y-2 justify-center items-center h-screen">
                  {{{ChangeAvatar}}}
                  {{{User user=user}}}
                </section>
              </div>
          </main>
          `;
    }
  }
  
  export default WithRouter(WithUser(Settings));
