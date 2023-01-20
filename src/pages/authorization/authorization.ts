import { InputValidate } from "helpers/validate"
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
                event.preventDefault()
                event.stopPropagation()
                // const loginElem = this.element?.querySelector("input[name='login']") as HTMLInputElement
                // const passElem = this.element?.querySelector("input[name='password']") as HTMLInputElement
                // console.log(this)
                let el = event.target as HTMLInputElement
                console.log(this.refs)
                let err = this.refs.login.refs.err
                return InputValidate("submit", el, err)
            // console.log(err.props.text)
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
                        }}}
                    </div>
                    <div>
                        {{{ ButtonConfirm 
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