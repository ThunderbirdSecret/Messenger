import { WithRouter } from "helpers/HOCS/WithRouter";
import { WithStore } from "helpers/HOCS/WithStore";
import { SubmitBtn } from "helpers/submit";
import { Block } from "utils";
import Router from "utils/Router";
import { Store } from "utils/store/Store";

interface AuthProps {
    router: Router;
    store: Store<AppState>;
    events?: Record<string, unknown>,
    navigateToReg: () => void;
    onSubmit: (e: SubmitEvent) => void;
}

interface SubmitEvent extends Event {
    submitter: any;
  }

export class Authorization extends Block<AuthProps> {
    static cName = "Authorization"

    constructor({...props}:AuthProps){
        super({...props,
            onSubmit: (event: SubmitEvent)=> {
                SubmitBtn(event, "authrization", this.refs)
            }})
    
        this.setProps({
            navigateToReg: () => {
                this.props.store.setState({ errorMessage: ""})
                // let inputs = {...this.refs }
            }
            // password: "",
            // error: "",
            
        })
    }



   /* protected getStateFromProps(props: any): void {
        this.state = {
            onSubmit: (event: Event)=>{
                let errText = this.refs.errAuth.props.text
                let formData = SubmitBtn(event, "authorization", this.refs)
                if(!errText || errText === "") {
                   return window.store.dispatch(login, formData)
                }
                return authAPI.signIn(formData)
            },
            signUpLink: (e: Event) => {
                e.preventDefault()
                window.router.go("/sign-up")
            }

        }
    }
*/
    

    protected render(): string {
        const { errorMessage } = this.props.store.getState();

        console.log("refs ", this.refs)
        console.log("store   ", window.store)
        console.log("router wrap ", WithRouter(Authorization))
        console.log("PROPS", this.props)

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
                            {{{ErrorComponent text=${errorMessage} ref="errAuth"}}}
                        </div>
                        {{{ ButtonConfirm 
                                class="w-[280px] h-[37px] bg-gradient-b-button-color text-white text-xl rounded-lg"
                                btn="Sign Up" 
                                path="#" 
                                ref="buttonConfirm"
                                onSubmit=onSubmit
                        }}}
                        <div class="text-center py-2">
                            {{{ LinkPage
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


export default WithRouter(WithStore(Authorization))
