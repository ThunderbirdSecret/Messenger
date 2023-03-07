import Block from "utils/Block";
import template from "./auth.hbs"
import { Link } from "components/navigate-button/navigate-button";
import Title from "components/title/title";
import Input from "components/input/input";
import ErrorComponent from "components/error-component/error-component";
import ButtonConfirm from "components/button-confirm/button-confirm";
import AuthController from "services/AuthController";
import { LoginRequestData } from "api/typesAPI";
import { InputValidate } from "helpers/validate";

export default class Authorization extends Block {

    constructor() {
        super({});
      }

    init() {
        this.children.title = new Title({
            title: "Authorization"
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
                // input: (e: FocusEvent) => this.onInput(e)
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
                // input: (e: FocusEvent) => this.onInput(e)
            }
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

      //@ts-expect-error
        this.children.link = new Link({
          title: "Sign Up",
          path: "/signup",
          class: "link-page",
          type: "button",
        });
    }

    onBlur(e: FocusEvent) {
        let ev = (e.target as HTMLInputElement)
        let err = document.getElementById("err") as HTMLElement
        
        return InputValidate("Authorization", ev, err)
    }

    onSubmit(){
    let loginValue = document.getElementById("login") as HTMLInputElement
    let passVal = document.getElementById("password") as HTMLInputElement
    const err = document.getElementById("err")

    if(err!.innerText === "" && loginValue.value !== "" && passVal.value !== ""){
            const data = {
                login: loginValue.value,
                password: passVal.value
            };

            AuthController.signin(data as LoginRequestData);
            return
    } else {
        return err!.innerText = "Не все поля заполнены"
    }
}
    

     render() {
        return this.compile(template, {...this.props});
     }
    }
