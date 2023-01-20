import Block from "utils/Block";

// interface RegistrationProps {
//     dataInput: object  {}
// }

// const dataInput: {type:string, placeholder: string, name: string, ref: string} = [
//     {
//         type: "email", placeholder: "E-mail", name: "email", ref: "emailRef"
//     },
//     {
//         type: "text", placeholder: "Login", name: "login", ref: "loginRef"
//     },
//     {
//         type: "text", placeholder: "Name", name: "first_name", ref: "nameRef"
//     },
//     {
//         type: "text", placeholder: "Second-name", name: "second-name", ref: "secondNameRef"
//     },
//     {
//         type: "tel", placeholder: "Phone", name: "phone", ref: "phoneRef"
//     },
//     {
//         type: "password", placeholder: "Password", name: "password", ref: "passwordRef"
//     },
//     {
//         type: "password", placeholder: "Password repeat", name: "password", ref: "passwordRepeatRef"
//     }
// ]

export class Registration extends Block {
    static cName = "Registration";

    constructor(){
        super()

        this.setProps({
            login: "",
            error: "",
            onInput: () => console.log("input"),
            onFocus: () => console.log("Focus"),
            // dataInput: {
            //     type: "email", 
            //     placeholder: "E-mail", 
            //     name: "email", 
            //     ref: "emailRef"
            // }
        })
    }

    protected render(): string {
        return `
        <main class="flex justify-center items-center h-screen">
        <div class="w-[340px] h-[615px] bg-graphite rounded-md p-[20px]">
            <form class="flex flex-col gap-y-2.5 justify-center items-center">
                {{{ Title title="Registration"}}}
                <div>
                    <div class="py-2.5">
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
                </div>
                <div>
                {{{ ButtonConfirm 
                    btn="Sign In" 
                    path="../dialog/dialog.html" 
                    ref="buttonConfirm"
                    onSubmit=onSubmit
                }}}
                    <div class="text-center py-6 text-blue">
                        {{{ LinkPage 
                            link="../authrization/authorization.html" 
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