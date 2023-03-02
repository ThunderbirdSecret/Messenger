// import { SubmitBtn } from "helpers/submit";
import { Block } from "utils";
import AuthController from "services/AuthController";
import { SubmitBtn } from "helpers/submit";
import { isEmpty } from "helpers/isEmpty";


// type Entry<T> = {
//     [K in keyof T]: [K, T[K]]
//   }[keyof T]
  
//   function filterObject<T extends object>(
//     obj: T,
//     fn: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean
//   ) {
//     return Object.fromEntries(
//       (Object.entries(obj) as Entry<T>[]).filter(fn)
//     ) as Partial<T>
//   }

type RegistrationsProps = {}
export default class Registration extends Block{
    static cName = "Registration";

    
    constructor({...props}:RegistrationsProps){
        super({...props,
            events:{
                submit: (e: SubmitEvent) => this.onSubmit(e),
            }
        })
    }

    onSubmit(e: SubmitEvent) {
        e.preventDefault()
        let err = document.querySelectorAll("#err")
        let allInput = document.querySelectorAll("div > input")

        let data = SubmitBtn(e, "registration", allInput, this.refs, err)
        console.log(isEmpty(data))
        
        if(isEmpty(data)){
            return AuthController.signup(data)
        }
        return console.log("не все поля заполнены")
    }

    // componentDidUpdate() {
    //     return window.store.getState().screen === "sign-up";
    // }

    protected render(): string {
        console.log(this)
        return `
        <main class="flex justify-center items-center h-screen">
            <div class="w-[340px] h-[615px] bg-graphite rounded-md p-[20px] overflow-y-scroll scrollbar">
                <form class="flex flex-col gap-y-2.5 justify-center items-center">
                    {{{ Title title="Registration" }}}
                    <div class="py-0.5">
                        {{{InputControlled
                            onInput=onInput
                            onFocus=onFocus
                            onBlur=onBlur
                            type="text"
                            name="login"
                            placeholder="Login"
                            ref="login"
                            value=loginValue
                            id="loginReg"
                        }}}
                    </div>
                    <div class="py-0.5">
                        {{{InputControlled
                            onInput=onInput
                            onFocus=onFocus
                            onBlur=onBlur
                            type="password"
                            name="password"
                            placeholder="Password"
                            ref="password"
                            value=passwordValue
                            id="passwordReg"
                        }}}
                    </div>
                    <div class="py-0.5">
                        {{{InputControlled
                            onInput=onInput
                            onFocus=onFocus
                            onBlur=onBlur
                            type="password"
                            name="password_check"
                            placeholder="Password check"
                            ref="passwordCheck"
                            value=passwordCheckValue
                            id="passwordCheckReg"
                        }}}
                    </div>
                    <div class="py-0.5">
                        {{{InputControlled
                            onInput=onInput
                            onFocus=onFocus
                            onBlur=onBlur
                            type="text"
                            name="first_name"
                            placeholder="Name"
                            ref="name"
                            value=nameValue
                            id="nameReg"
                        }}}
                    </div>
                    <div class="py-0.5">
                        {{{InputControlled
                            onInput=onInput
                            onFocus=onFocus
                            onBlur=onBlur
                            type="text"
                            name="second_name"
                            placeholder="Second name"
                            ref="secondName"
                            value=secondNameValue
                            id="secondNameReg"
                        }}}
                    </div>
                    <div class="py-0.5">
                    {{{InputControlled
                        onInput=onInput
                        onFocus=onFocus
                        onBlur=onBlur
                        type="text"
                        name="display_name"
                        placeholder="Display name"
                        ref="displayName"
                        value=displayNameValue
                        id="displayNameReg"
                    }}}
                    </div>
                    <div class="py-0.5">
                    {{{InputControlled
                        onInput=onInput
                        onFocus=onFocus
                        onBlur=onBlur
                        type="phone"
                        name="phone"
                        placeholder="Phone"
                        ref="phone"
                        value=phoneValue
                        id="phoneReg"
                    }}}
                    </div>
                    <div class="py-0.5">
                    {{{InputControlled
                        onInput=onInput
                        onFocus=onFocus
                        onBlur=onBlur
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        ref="email"
                        value=emailValue
                        id="emailReg"
                    }}}
                    </div>
                    <div>
                        <div class="text-red pb-2" id="err"> 
                            {{{ErrorComponent text=error ref="errReg"}}}
                        </div>
                        {{{ ButtonConfirm
                                btn="Create account" 
                                path="#"
                                onSubmit=onSubmit
                                class="w-[280px] h-[37px] bg-gradient-b-button-color text-white text-xl rounded-lg"
                        }}}
                        <div class="text-center py-2 text-blue">
                            {{{ LinkPage 
                                link="#" 
                                linkTitle="Sign in"
                            }}}
                        </div>
                    </div>
                </form>
            </div>
        </main>
        `
    }
}

