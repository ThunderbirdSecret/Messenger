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
                let statusArr = [...document.querySelectorAll("input")]
                let linkVisible = [...document.querySelectorAll("a > p")]
                let confirm = document.getElementById("confirm")
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
            savePassword: (e: Event) => {
                SubmitBtn(e, "password", this.refs)
                
            },
            editPassword: (e: Event) => {
                e.preventDefault()  
                e.stopPropagation()
                let changePass = document.getElementById("change_password")
                let pageSettings = document.getElementById("page_settings")
                pageSettings!.classList.add("hidden")
                changePass!.classList.remove("hidden")
                
            },
            status: "disabled",
            passwordOldValue:"",
            passwordValue: "",
            passwordCheckValue: "",
            placeholder: {
                email: "pochta@yandex.ru",
                login: "Stupiddog",
                first_name: "Сабоба",
                second_name: "Абобакевич",
                display_name:"Собакевич",
                phone: "81231231212",
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
                {{{Avatar id="avatar_upload"}}}
                    <div>{{{SettingInput label="Login" ref="login" id="i1" value=value type="text" name="login" placeholder=placeholder.login status=status}}}</div>
                    <div>{{{SettingInput label="Name" ref="name" type="text" value=value id="i2" name="name" placeholder=placeholder.first_name status=status}}}</div>
                    <div>{{{SettingInput label="Second-Name" ref="secondName" value=value id="i3" type="text" name="second_name" placeholder=placeholder.second_name status=status}}}</div>
                    <div>{{{SettingInput label="Display-Name" ref="displayName" value=value id="i4" type="text" name="display_name" placeholder=placeholder.display_name status=status}}}</div>
                    <div>{{{SettingInput label="Email" ref="email" type="email" value=value id="i5" name="email" placeholder=placeholder.email status=status}}}</div>
                    <div>{{{SettingInput label="Phone" ref="phone" type="phone" value=value id="i6" name="phone" placeholder=placeholder.phone status=status}}}</div>
                <div id="links" class="{{visiblelink}} text-blue py-10 mr-[420px]">
                  <div>{{{LinkPage linkTitle="Edit settings" href="./" onClick=onClick ref="linkSettings"}}} </div>
                  <div>{{{LinkPage linkTitle="Edit password" onClick=editPassword}}}</div>
                  <div>{{{LinkPage linkTitle="Log out" link="src/index.html"}}}</div>
                </div>
                <div id="confirm" class="z-40 mt-[-100px] invisible">
                    <div class="text-red pb-2" id="err"> 
                        {{{ErrorComponent text=error ref="errSet"}}}
                    </div>
                    {{{ButtonConfirm 
                        class="w-[280px] h-[37px] bg-gradient-b-button-color text-white text-xl rounded-lg"
                        ref="submit" 
                        btn="Save" 
                        path="#" 
                        onSubmit=onSubmit}}}
                </div>
            </form>
            </div>
            <div id="change_password" class="flex hidden h-screen px-2">
                <div class="mr-auto my-auto flex-none">
                    {{{ BackButton onClick=onBack}}}
                </div>
                <form class="grow flex flex-col gap-y-2 justify-center items-center h-screen">
                        {{{ Avatar  }}}
                            <div class="py-2">
                                <fieldset>
                                    <legend class="text-xs border-none text-white">Old password</legend>
                                    {{{InputControlled
                                        type="password"
                                        name="old_password"
                                        ref="oldPassword"
                                        value=passwordOldValue
                                        id="passwordOldSet"
                                        text=error
                                    }}}
                                </fieldset>
                            </div>
                            <div class="py-2">
                                <fieldset>
                                    <legend class="text-xs border-none text-white">New password</legend>
                                    {{{InputControlled
                                        type="password"
                                        name="password"
                                        ref="password"
                                        value=passwordValue
                                        id="passwordSet"
                                        text=error
                                    }}}
                                </fieldset>
                            </div>
                            <div class="py-2">
                                <fieldset>
                                    <legend class="text-xs border-none text-white">Check password</legend>
                                    {{{InputControlled
                                        type="password"
                                        name="password_check"
                                        ref="passwordCheck"
                                        value=passwordCheckValue
                                        id="passwordCheckSet"
                                        text=error
                                    }}}
                                </fieldset>
                            </div>
                    <div class="py-2" >
                    <div class="text-red pb-2" id="err"> 
                        {{{ErrorComponent text=error ref="errPass"}}}
                    </div>
                        {{{ ButtonConfirm 
                            class="w-[280px] h-[37px] bg-gradient-b-button-color text-white text-xl rounded-lg"
                            btn="Save" 
                            path="#" 
                            onSubmit=savePassword 
                        }}}
                    </div>
                </form>
            </div>
        </main>
            `
    }
}
