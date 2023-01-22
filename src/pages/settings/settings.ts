import { InputValidate } from "helpers/validate";
import Block from "utils/Block";

export class Settings extends Block {
    static cName = "Settings"
    constructor(){
        super({
            }
        );
        this.setProps ({
            onClick: (e: Event) => {
                e.preventDefault()  
                e.stopPropagation()
                console.log("begin")
                let statusArr = [...document.querySelectorAll("input")]
                let linkVisible = [...document.querySelectorAll("a > p")]
                let confirm = document.getElementById("confirm")
                console.log(confirm)
                statusArr.map((item) => {
                    item.disabled = false
                })
                linkVisible.map((link) => {
                    link.classList.add("invisible")
                })
                confirm!.classList.remove("invisible")
            },
            onSubmit: (e: Event) => {
                e.preventDefault()
                e.stopPropagation()
                let allErr = [...document.querySelectorAll("#err")]
                allErr.forEach((item) => {
                    console.log(item.outerHTML)
                })
            },
            status: "disabled",
            placeholder: {
                email: "pochta@yandex.ru",
                login: "ivanivanov",
                first_name: "Иван",
                second_name: "Иванов",
                display_name:"Иван",
                phone: "+1(111)111-11-11",
            }
        }) 
    }
    



    protected render(): string {
        return `
        <main class="h-screen flex px-2">
            <div class="mr-auto my-auto flex-none">
                {{{BackButton path="../dialog/dialog.html"}}}
            </div>
            <form class="grow flex flex-col gap-y-2 justify-center items-center h-screen">
                {{{Avatar}}}
                    <div>{{{SettingInput 
                                label="Login" 
                                ref="setInput" 
                                type="text" 
                                name="login" 
                                placeholder=placeholder.login 
                                status=status
                        }}}</div>
                    <div>{{{SettingInput label="Name" ref="setInput" type="text" name="name" placeholder=placeholder.first_name status=status}}}</div>
                    <div>{{{SettingInput label="Second-Name" ref="setInput" type="text" name="second-name" placeholder=placeholder.second_name status=status}}}</div>
                    <div>{{{SettingInput label="Display-Name" ref="setInput" type="text" name="display-name" placeholder=placeholder.display_name status=status}}}</div>
                    <div>{{{SettingInput label="Email" ref="setInput" type="email" name="email" placeholder=placeholder.email status=status}}}</div>
                    <div>{{{SettingInput label="Phone" ref="setInput" type="phone" name="phone" placeholder=placeholder.phone status=status}}}</div>
                <div id="links" class="{{visiblelink}} text-blue py-10 mr-[420px]">
                  <div>
                    {{{LinkPage 
                            linkTitle="Edit settings" 
                            href="./"
                            onClick=onClick
                            ref="linkSettings"
                    }}} 
                    </div>
                  <div>{{{LinkPage linkTitle="Edit password"}}}</div>
                  <div>{{{LinkPage linkTitle="Log out"}}}</div>
                </div>
                <div id="confirm" class="z-40 mt-[-100px] invisible">{{{ButtonConfirm btn="Save" path="#" onSubmit=onSubmit}}}</div>
            </form>
        </main>
            `
    }
}