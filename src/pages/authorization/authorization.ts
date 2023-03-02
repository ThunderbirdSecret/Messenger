import { LoginRequestData } from "api/typesAPI";
import AuthController from "services/AuthController";
import { Block } from "utils";

interface AuthProps {
    navigateToReg?: () => void;
    events?:{
        submit: (e: SubmitEvent) => void;
    }
}

export default class Authorization extends Block {
    static cName = "Authorization"

    constructor({...props}:AuthProps){
        super({...props,
            events:{
                submit: (e: SubmitEvent) => this.onSubmit(e)
            }
        })
    }

    onSubmit(e: SubmitEvent){
    e.preventDefault()
    let loginValue = document.getElementById("login") as HTMLInputElement
    let passVal = document.getElementById("password") as HTMLInputElement
    const data = {
        login: loginValue.value,
        password: passVal.value
    };
    console.log(data)
      AuthController.signin(data as LoginRequestData);
    }
    

    protected render(): string {
        console.log("PROPS", this)

        return `

        <main class="flex justify-center items-center h-screen">
        {{{ Loader }}}
            <div class="w-[340px] h-[384px] bg-graphite rounded-md p-[20px]">
                {{{ Title title="Autorization" }}}
                <form class="flex flex-col gap-y-10 justify-center items-center">
                    <div>
                            {{{ InputControlled
                                    type="text"
                                    name="login"
                                    placeholder="Login"
                                    ref="login"
                                    onBlur=onBlur
                                    onInput=onInput
                                    onFocus=onFocus
                                    value=""
                                    id="login"
                            }}}
                    </div>
                    <div>
                        {{{ InputControlled
                                type="password"
                                name="password"
                                placeholder="Password"
                                ref="password"
                                onInput=onInput
                                onFocus=onFocus
                                onBlur=onBlur
                                value=""
                                id="password"
                        }}}
                    </div>
                    <div>
                        <div class="text-red pb-2" id="err"> 
                            {{{ErrorComponent text=error ref="errAuth"}}}
                        </div>
                        {{{ ButtonConfirm 
                                class="w-[280px] h-[37px] bg-gradient-b-button-color text-white text-xl rounded-lg"
                                btn="Sign Up" 
                                path="#" 
                                ref="buttonConfirm"
                                onSubmit=onSubmit
                                type="submit"
                        }}}
                        <div class="text-center py-2">
                            {{{ LinkPage
                                to="/signup"
                                ref="link"
                                onClick=signUpLink
                                linkTitle="Create account" 
                            }}}
                        </div>
                    </div>
                </form>
            </div>
        </main>`
    }
}
