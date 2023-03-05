import Block from "utils/Block";
import template from "./settings.hbs"
import DataItem from "components/settingsForm/DataItem/DataItem";
import { Link } from "components/navigate-button/navigate-button";
import ButtonConfirm from "components/button-confirm/button-confirm";
import AuthController from "services/AuthController";
import { withStore } from "utils/store/Store";
import Avatar from "components/avatar/avatar";
import { DEFAULT_AVATAR } from "constants/imagesPaths";

export interface SettingsProps extends UserType{}

  const userFields = ["first_name", "second_name", "display_name", "login", "email", "phone"] as Array<keyof UserType>;
  

  export class Settings extends Block<SettingsProps>{
  
    constructor() {
      super({});
      }

      init() {

        //@ts-expect-error
        this.children.back = new Link({
          title: "🡐",
          path: "/messenger",
          class: "back-button",
          type: "button"
        })

        this.children.avatar = new Avatar({
          avatarValue: DEFAULT_AVATAR
        })

        this.children.fields = userFields.map(name => {
          return new DataItem({ name, value: this.props[name] });
        });

        //@ts-expect-error
        this.children.datachange = new Link({
          title: "Change profile",
          path: "/changedata",
          class: "link-page",
          type: "button",
        });

        //@ts-expect-error
        this.children.datapass = new Link({
          title: "Change password",
          path: "/changepassword",
          class: "link-page",
          type: "button",
        });

        this.children.logout = new ButtonConfirm({
          title: "Sign out",
          class: "link-page",
          events: {
            click:() => AuthController.logout()
          }
        })
      }
  
      protected componentDidUpdate(oldProps: SettingsProps, newProps: SettingsProps): boolean {

        (this.children.fields as DataItem[]).forEach((field, i) => {
          field.setProps({  value: newProps[userFields[i]] });
        });
        return false;
      }

    render() {
      return this.compile(template, {...this.props})
    }
  }
  
  const withUser = withStore((state) => ({ ...state.user }))

  export const ProfilePage = withUser(Settings);
