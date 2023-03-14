import Block from "utils/Block";
import template from "./change-password.hbs"
import { Link } from "components/navigate-button/navigate-button";
import Input from "components/input/input";
import ErrorComponent from "components/error-component/error-component";
import ButtonConfirm from "components/button-confirm/button-confirm";
import UsersController from "services/UserController";
import { InputValidate } from "helpers/validate";
export default class ChangePassword extends Block {

  constructor() {
    super({ });
  }
  
  init(){

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
      }
    })        
  
    this.children.newpassword = new Input({
      name: "newPassword",
      type: "password",
      class: "input-controlled",
      placeholder: "password",
      id: "new_password",
      value: "",
      events: {
          blur: (e: FocusEvent) => this.onBlur(e),
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
        const errorEl = document.getElementById("err")
        if(errorEl!.innerText === ""){
          UsersController.changePassword(data)
        } 
  }

  onBlur(e: FocusEvent) {
    //TODO: Валидация
    let el = e.target as HTMLInputElement
    let err = document.getElementById("err") as HTMLElement
    InputValidate("changePassword", el, err)
  }


  render() {
    return this.compile(template, {...this.props});
  }
}

