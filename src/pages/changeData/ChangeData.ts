import Avatar from "components/avatar/avatar";
import ButtonConfirm from "components/button-confirm/button-confirm";
import ErrorComponent from "components/error-component/error-component";
import { Link } from "components/navigate-button/navigate-button";
import UserDataInput from "components/settingsForm/userDataInput/UserDataInput";
import { DEFAULT_AVATAR } from "constants/imagesPaths";
import { SettingsProps } from "pages/settings/settings";
import Block from "utils/Block";
import template from "./change-data.hbs"
import { withStore } from "utils/store/Store";
import uController from "services/UserController";
import { UserReq } from "api/typesAPI";

export interface ChangeSettingsProps extends SettingsProps{
  textErr: string;
  value: string;
}
    

/***
 * Добавить валидацию на blur, изменение данных, запрос на сервак на изменение
 */
class ChangeData extends Block<ChangeSettingsProps>{  
    constructor(props:ChangeSettingsProps) {
      super(props);
    }

    init() {

      //@ts-expect-error
      this.children.back = new Link({
        title: "🡐",
        path: "/settings",
        class: "back-button",
        type: "button"
      })

      this.children.avatar = new Avatar({
        avatarValue: DEFAULT_AVATAR
      })

      this.children.firstname = new UserDataInput({
          title: "First name",
          name: "first_name",
          id: "first_name",
          placeholder: this.props.first_name,
          value: "",
          type: "text",
      })

      this.children.secondname = new UserDataInput({
        title: "Second name",
        name: "second_name",
        id: "second-name",
        placeholder: this.props.second_name,
        value: this.props.value,
        type: "text"
      })

      this.children.displayname = new UserDataInput({
        title: "Display name",
        name: "display_name",
        id: "display_name",
        placeholder: this.props.display_name ? this.props.display_name : "undefined",
        value: "",
        type: "text"
      })

      this.children.login = new UserDataInput({
        title: "Login",
        name: "login",
        id: "login",
        placeholder: this.props.login,
        value: "",
        type: "text"
      })

      this.children.email = new UserDataInput({
        title: "Email",
        name: "email",
        id: "email",
        placeholder: this.props.email,
        value: "",
        type: "email"
      })

      this.children.phone = new UserDataInput({
        title: "Phone",
        name: "phone",
        id: "phone",
        placeholder: this.props.phone,
        value: "",
        type: "phone"
      })

      this.children.error = new ErrorComponent({
        id: "err",
        text: this.props.textErr
    })

    this.children.button = new ButtonConfirm({
        title: "Sign in",
        class: "button-confirm",
        events: {
          click: () => this.onSubmit()
        },
      })
    }

    onSubmit() {
      const data: Record<string, string> = {}
      const input = document.querySelectorAll("input")
      input.forEach((_, i) => {
        let nameEl = input[i].name
        let valueEl = input[i].value
        let placeholderEl = input[i].placeholder
        if(nameEl != "avatar")
        data[nameEl] = valueEl ? valueEl : placeholderEl
        // data[nameEl] = valueEl
      })
      console.log(data)
      //@ts-ignore
      uController.changeProfile(data as UserReq)
    }
    
    render() {
      return this.compile(template, {...this.props});
   }
}
  
const withUser = withStore((state) => ({ ...state.user }))

export const EditProfile = withUser(ChangeData);
