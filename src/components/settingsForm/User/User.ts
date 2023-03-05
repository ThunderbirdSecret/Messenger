
//@ts-nocheck
import { withStore } from "helpers/HOCS/WithStore";
import { getUserDataArray } from "helpers/getUserDataArray";
import AuthController from "services/AuthController";
import { Block } from "utils";


const title = ["first_name", "second_name", "display_name", "login", "email", "phone"] as Array<keyof UserProps>;
export interface UserProps extends UserType {
    user?: Nullable<UserType>;
    userData?: Array<any>;
    imageSrc?: string;
    events: {
      click: {
        click: () => void
      }
    }
    // getAvatarSrc: (path: string) => void;
  };
  
  export class User extends Block<UserProps> {
    static cName = "User";
  
    avatarSrc = "";
  
    constructor(props: UserProps) {
      super({props, events: {
        click: () => this.logoutUser()
      }});
      
      const data = getUserDataArray(props)
      this.setProps({
        userData: data,
        // imageSrc,
        
      });
    }
    logoutUser () {
      console.log("LOGOUT")
      AuthController.logout()
    }
  
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
                {{{LinkPage linkTitle="Change profile" to="/change-profile" type="button" }}} 
                {{{LinkPage linkTitle="Change password" to="/change-password" type="button"}}} 
                {{{LinkPage linkTitle="Log out" type="button" click=logoutUser}}} 
              </div>
          </div>
          `;
    }
  }
  const withUser = withStore((state) => ({ ...state.user }))

  export default withUser(User);
