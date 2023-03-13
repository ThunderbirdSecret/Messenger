import Block from "utils/Block";
import template from "./settings.hbs"
import DataItem from "components/settingsForm/DataItem/DataItem";
import { Link } from "components/navigate-button/navigate-button";
import ButtonConfirm from "components/button-confirm/button-confirm";
import AuthController from "services/AuthController";
import { withStore } from "utils/store/Store";
import Avatar, { hoverImg } from "components/avatar/avatar";

export interface SettingsProps extends UserType{}

export const userFields = ["first_name", "second_name", "display_name", "login", "email", "phone"] as Array<keyof UserType>;
  
hoverImg.default.src = require("asserts/images/06.jpg")

  export class Settings extends Block<SettingsProps>{
  
      init() {

        this.children.back = new Link({
          title: "🡐",
          path: "/messenger",
          class: "back-button",
          type: "button"
        })

        this.children.avatar = new Avatar({})

        this.children.fields = userFields.map(name => {
          return new DataItem({ name, value: this.props[name] ? this.props[name] : "not found" });
        });

        this.children.datachange = new Link({
          title: "Change profile",
          path: "/changedata",
          class: "text-blue border-none text-base",
          type: "button",
        });

        this.children.datapass = new Link({
          title: "Change password",
          path: "/changepassword",
          class: "text-blue border-none text-base",
          type: "button",
        });

        this.children.logout = new ButtonConfirm({
          title: "Sign out",
          class: "text-blue border-none text-base",
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
