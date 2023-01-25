import { SubmitBtn } from "helpers/submit"
import Block from "utils/Block"

export class Authorization extends Block {
    static cName = "Authorization"

    constructor(){
        super()
    
        this.setProps({
            login: "",
            password: "",
            error: "",
            onSubmit: (event: Event)=>{
                return SubmitBtn(event, "authorization", this.refs)
            },
            onInput: () => console.log("input"),
            onFocus: () => console.log("Focus"),
        })
    }


    protected render(): string {
        // console.log(this.refs)
        return `
        <main class="flex justify-center items-center h-screen">
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
                                    value=value
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
                                path="../dialog/dialog.html" 
                                ref="buttonConfirm"
                                onSubmit=onSubmit
                        }}}
                        <div class="text-center py-2">
                            {{{ LinkPage
                                ref="link"
                                link="../registration/registration.html" 
                                linkTitle="Create account" 
                            }}}
                        </div>
                    </div>
                </form>
            </div>
        </main>`
    }
}