import Block from "utils/Block";

export class Settings extends Block {
    static cName = "Settings"
    constructor(){
        super();

        this.setProps ({
            onClick: () => this.onClick.bind(this),
        //     // onInput: this.onInput.bind(this),
        //     // onBlur: this.onBlur.bind(this),
        //     // onFocus: this.onFocus.bind(this),
        //     // onChange: this.onChange.bind(this),
        //     // hidden: false, 
            status: "disabled",
            visiblelink: "",
            visiblebtn: "",
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
    
    


    onClick(e: Event) {
        e.preventDefault();
        this.setProps({
            status: '',
            placeholders: {
                email: 'Введите почту',
                login: 'Введите логин',
                first_name: 'Введите имя',
                second_name: 'Введите фамилию',
                display_name:'Введите имя в чате',
                phone: 'Введите номер телефона',
            }
        })
    }


    protected render(): string {
        console.log(this.refs)
        return `
        <main class="h-screen flex px-2">
            <div class="mr-auto my-auto flex-none">
                {{{BackButton path="../dialog/dialog.html"}}}
            </div>
            <form class="grow flex flex-col gap-y-2 justify-center items-center h-screen">
                {{{Avatar}}}
                    <div>{{{SettingInput label="Email" type="email" name="email" placeholder=placeholder.email status=status}}}</div>
                    <div>{{{SettingInput label="Login" type="text" name="login" placeholder=placeholder.login status=status}}}</div>
                    <div>{{{SettingInput label="Name" type="text" name="name" placeholder=placeholder.first_name status=status}}}</div>
                    <div>{{{SettingInput label="Second-Name" type="text" name="second-name" placeholder=placeholder.second_name status=status}}}</div>
                    <div>{{{SettingInput label="Display-Name" type="text" name="display-name" placeholder=placeholder.display_name status=status}}}</div>
                    <div>{{{SettingInput label="Phone" type="phone" name="phone" placeholder=placeholder.phone status=status}}}</div>
                <div id="links" class="{{visiblelink}} text-blue py-10 mr-[420px]">
                  <div><a class="text-blue text-center text-base py-6" id="sett" href="../../index.html">Edit Settings</a></div>
                  <div>{{{LinkPage onClick=OnClick linkTitle="Edit password"}}}</div>
                  <div>{{{LinkPage linkTitle="Log out"}}}</div>
                </div>
                <div id="confirm" class="py-10 {{visiblebtn}}">{{{ButtonConfirm btn="Save" path="#"}}}</div>
            </form>
        </main>
            `
    }
}