import { SubmitBtn } from "helpers/submit";
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
                SubmitBtn(e, "settings", this.refs)
               
            },
            editPassword: (e: Event) => {
                e.preventDefault()  
                e.stopPropagation()
                console.log("Password")
                let changePass = document.getElementById("change_password")
                let pageSettings = document.getElementById("page_settings")
                console.log(changePass)
                pageSettings!.classList.add("hidden")
                changePass!.classList.remove("hidden")
                
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
        <main  class="h-screen ">
        <div id="page_settings" class="flex px-2" >
            <div class="mr-auto my-auto flex-none">
                {{{BackButton path="../dialog/dialog.html"}}}
            </div>
            <form class="grow flex flex-col gap-y-2 justify-center items-center h-screen">
                {{{Avatar}}}
                    <div>{{{SettingInput label="Login" ref="login" id="i1" value=value type="text" name="login" placeholder=placeholder.login status=status}}}</div>
                    <div>{{{SettingInput label="Name" ref="setInput" type="text" id="i2" name="name" placeholder=placeholder.first_name status=status}}}</div>
                    <div>{{{SettingInput label="Second-Name" ref="setInput" id="i3" type="text" name="second-name" placeholder=placeholder.second_name status=status}}}</div>
                    <div>{{{SettingInput label="Display-Name" ref="setInput" id="i4" type="text" name="display-name" placeholder=placeholder.display_name status=status}}}</div>
                    <div>{{{SettingInput label="Email" ref="setInput" type="email" id="i5" name="email" placeholder=placeholder.email status=status}}}</div>
                    <div>{{{SettingInput label="Phone" ref="setInput" type="phone" id="i6" name="phone" placeholder=placeholder.phone status=status}}}</div>
                <div id="links" class="{{visiblelink}} text-blue py-10 mr-[420px]">
                  <div>{{{LinkPage linkTitle="Edit settings" href="./" onClick=onClick ref="linkSettings"}}} </div>
                  <div>{{{LinkPage linkTitle="Edit password" onClick=editPassword}}}</div>
                  <div>{{{LinkPage linkTitle="Log out"}}}</div>
                </div>
                <div id="confirm" class="z-40 mt-[-100px] invisible">
                    {{{ButtonConfirm ref="submit" btn="Save" path="#" onSubmit=onSubmit}}}
                </div>
            </form>
            </div>
            <div id="change_password" class="hidden h-screen flex px-2">
                <div class="mr-auto my-auto flex-none">
                    {{{ BackButton onClick=onBack}}}
                </div>
                <form class="grow flex flex-col gap-y-2 justify-center items-center h-screen">
                        {{{ Avatar  }}}
                            <div class="py-2">
                                <fieldset>
                                    <legend class="text-xs border-none text-white">Old password</legend>
                                    {{{ InputControlled
                                        type="password"
                                        name="old_password"
                                        ref="oldPassword"
                                        value=value
                                        onInput=onInput
                                        onFocus=onFocus
                                        onBlur=onBlur
                                        id="old_password"
                                    }}}
                                </fieldset>
                            </div>
                            <div class="py-2">
                                <fieldset>
                                    <legend class="text-xs border-none text-white">New password</legend>
                                    {{{ InputControlled
                                        type="password"
                                        name="password"
                                        ref="passport"
                                        value=value
                                        onInput=onInput
                                        onFocus=onFocus
                                        onBlur=onBlur
                                        id="password-edit"
                                    }}}
                                </fieldset>
                            </div>
                            <div class="py-2">
                                <fieldset>
                                    <legend class="text-xs border-none text-white">Check password</legend>
                                    {{{ InputControlled
                                        type="password"
                                        name="password_check"
                                        ref="passportCheck"
                                        value=value
                                        onInput=onInput
                                        onFocus=onFocus
                                        onBlur=onBlur
                                        id="password_check"
                                    }}}
                                </fieldset>
                            </div>
                    <div class="py-2" >
                        {{{ ButtonConfirm btn="Save" path="#"}}}
                    </div>
                </form>
            </div>
        </main>
            `
    }
}