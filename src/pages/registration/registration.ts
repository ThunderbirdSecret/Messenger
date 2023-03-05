import AuthController from "services/AuthController";
import Block from "utils/Block";
import template from "./register.hbs"
import Title from "components/title/title";
import Input from "components/input/input";
import ErrorComponent from "components/error-component/error-component";
import ButtonConfirm from "components/button-confirm/button-confirm";
import { InputValidate } from "helpers/validate";
import { Link } from "components/navigate-button/navigate-button";
import { SignupRequestData } from "api/typesAPI";


export default class Registration extends Block{
    constructor(){
        super({})
    }

    init() {
        this.children.title = new Title({
            title: "Registration"
        })

        this.children.login = new Input({
            name: "login",
            type: "text",
            class: "input-controlled",
            placeholder: "Login",
            id: "login",
            value: "",
            events: {
                blur: (e: FocusEvent) => this.onBlur(e),
            }
        })

        this.children.password = new Input({
            name: "password",
            type: "password",
            class: "input-controlled",
            placeholder: "password",
            id: "password",
            value: "",
            events: {
                blur: (e: FocusEvent) => this.onBlur(e),
            }
        })

        this.children.password_check = new Input({
            name: "password_check",
            type: "password",
            class: "input-controlled",
            placeholder: "password",
            id: "password_check",
            value: "",
            events: {
                blur: (e: FocusEvent) => this.onBlur(e),
            }
        })

        this.children.firstname = new Input({
            name: "first_name",
            type: "text",
            class: "input-controlled",
            placeholder: "first name",
            id: "first_name",
            value: "",
            events: {
                blur: (e: FocusEvent) => this.onBlur(e),
            }
        })

        this.children.secondname = new Input({
            name: "second_name",
            type: "text",
            class: "input-controlled",
            placeholder: "second name",
            id: "second_name",
            value: "",
            events: {
                blur: (e: FocusEvent) => this.onBlur(e),
            }
        })

        this.children.displayname = new Input({
            name: "display_name",
            type: "text",
            class: "input-controlled",
            placeholder: "display name",
            id: "display_name",
            value: "",
            events: {
                blur: (e: FocusEvent) => this.onBlur(e),
            }
        })

        this.children.email = new Input({
            name: "email",
            type: "email",
            class: "input-controlled",
            placeholder: "email",
            id: "email",
            value: "",
            events: {
                blur: (e: FocusEvent) => this.onBlur(e),
            }
        })

        this.children.phone = new Input({
            name: "phone",
            type: "phone",
            class: "input-controlled",
            placeholder: "phone",
            id: "phone",
            value: "",
            events: {
                blur: (e: FocusEvent) => this.onBlur(e),
            }
        })

        this.children.error = new ErrorComponent ({
            id: "err",
            text: ""           
        })

        this.children.button = new ButtonConfirm({
            title: "Sign in",
            class: "button-confirm",
            events: {
              click: () => this.onSubmit()
            },
          })

        //@ts-expect-error
        this.children.link = new Link({
          title: "Sign in",
          path: "/",
          class: "link-page",
          type: "button",
        });
    }

    onBlur(e: FocusEvent) {
        
        const ev = (e.target as HTMLInputElement)
        let err = document.getElementById("err") as HTMLElement
        InputValidate("Registration", ev, err)        
        
    }

    onSubmit() {
        const values = Object
        .values(this.children)
        .filter(child => child instanceof Input)
        .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))
  
      const data = Object.fromEntries(values);
    
      console.log(data)
      AuthController.signup(data as SignupRequestData);
    }
  
     render() {
        return this.compile(template, {...this.props})
    }
}

