import Block from "utils/Block";
import template from "./change-password.hbs"
import { Link } from "components/navigate-button/navigate-button";
import Input from "components/input/input";
import ErrorComponent from "components/error-component/error-component";
import ButtonConfirm from "components/button-confirm/button-confirm";
import uController from "services/UserController";
export default class ChangePassword extends Block {

  constructor() {
    super({ });
  }
  
  init(){

    //@ts-expect-error
    this.children.back = new Link({
      title: "🡐",
      path: "/settings",
      class: "back-button",
      type: "button"
    })

    this.children.oldpassword = new Input({
      name: "oldPassword",
      type: "password",
      class: "input-controlled",
      placeholder: "old password",
      id: "old_password",
      value: "",
      events: {
          blur: (e: FocusEvent) => this.onBlur(e),
          // input: (e: FocusEvent) => this.onInput(e)
      }
    })        
  
    this.children.newpassword = new Input({
      name: "newPassword",
      type: "password",
      class: "input-controlled",
      placeholder: "new_password",
      id: "new_password",
      value: "",
      events: {
          blur: (e: FocusEvent) => this.onBlur(e),
          // input: (e: FocusEvent) => this.onInput(e)
      }
    })        

    this.children.passwordcheck = new Input({
      name: "password_check",
      type: "password",
      class: "input-controlled",
      placeholder: "password_check",
      id: "password_check",
      value: "",
      events: {
          blur: (e: FocusEvent) => this.onBlur(e),
          // input: (e: FocusEvent) => this.onInput(e)
      }
    })

    this.children.error = new ErrorComponent({
      id: "err",
      text: this.props.textErr
  })

    this.children.button = new ButtonConfirm({
      title: "Change Password",
      class: "button-confirm",
      events: {
        click: () => this.onSubmit()
      },
    })


  }


  async onSubmit() {
    const values = Object
        .values(this.children)
        .filter(child => child instanceof Input)
        .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))
        .slice(0, 2)
        const data = Object.fromEntries(values);
      console.log(data)
      uController.changePassword(data)
      // console.log(data)
  }

  onBlur(e: FocusEvent) {
    console.log("и без валидации все очень плохо")
  }


  render() {
    return this.compile(template, {...this.props});
  }
}

