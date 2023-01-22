/*export enum ValidateRuleType  {
    Login = 'login',
    Password = 'password',
    Email = 'email',
    Name = 'first_name',
    SecondName = 'second_name',
    Phone = 'phone',
    PasswordCheck = 'check_password',
    DisplayName = 'display_name'
}

export interface MessageProps {
    event: Event,
    context: any,
    name?: string,
    page?: string
}

export enum MessageOutputPages {
    Authorization = "autorization",
    Registration = "registration",
    Settings = "settings",
    Password = "password"
} */

const regExpValidate = {
    Login: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
    Password: /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/,
    Email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    Name: /^[A-ZА-ЯЁ]{1,}[-A-Za-zА-Яа-яЁё]{0,}$/,
    Phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
}


export function InputValidate(nameEvent: string, el: HTMLInputElement, err: any) {
    if(nameEvent === "blur"){
        if(el.name! === "login") {
            console.log(el)
            if(!regExpValidate.Login.test(el.value)) {
                return err.setProps({text: "Логин кривой!"})
            }
            if(el.value = "") {
                return err.setProps({text: "Поле должно быть заполнено!"})
            }
        }

        if(el.name! === "password") {
            if(!regExpValidate.Password.test(el.value)) {
                return err.setProps({text: "пароль не очень!"})
            }
            if(el.value = "") {
                return err.setProps({text: "Поле должно быть заполнено!"})
            }
        }

        if(el.name === "email") {
            if(!regExpValidate.Email.test(el.value)) {
                return err.setProps({text: "email должен выглядеть не так!"})
            }
            if(el.value = "") {
                return err.setProps({text: "Поле должно быть заполнено!"})
            }
        }

        if(el.name === "phone") {
            if(!regExpValidate.Phone.test(el.value)) {
                return err.setProps({text: "Номер нормально пиши!"})
            }
            if(el.value = "") {
                return err.setProps({text: "Поле должно быть заполнено!"})
            }
        }

        if(el.name === "name") {
            if(!regExpValidate.Name.test(el.value)) {
                return err.setProps({text: "Че за знаки в Имени?!"})
            }
            if(el.value = "") {
                return err.setProps({text: "Поле должно быть заполнено!"})
            }
        }

        if(el.name === "second_name") {
            if(!regExpValidate.Name.test(el.value)) {
                return err.setProps({text: "Че ты в фамилии написал?!"})
            }
            if(el.value = "") {
                return err.setProps({text: "Поле должно быть заполнено!"})
            }
        }

        if(el.name === "display_name") {
            if(!regExpValidate.Name.test(el.value)) {
                return err.setProps({text: "Стремный дисплейнейм!"})
            }
            if(el.value = "") {
                return err.setProps({text: "Поле должно быть заполнено!"})
            }
        }

        if(el.name === "password_check") {
            let target = document.querySelector('input[type="password"]') as HTMLInputElement;
                if (target) {
                    let password = target.value;
                    if(el.value !== password || el.value === '') {
                        return err.setProps({text: "пароли не совпадают!"})
                    }
                }
        }
    }

    if(nameEvent === "submit") {
        //добавить проверку на пустые инпуты
        if(!err.props.text){
            return console.log("Cоответствует валидации: ", el.value)
        } else {
            return console.log("Придумай что-нибудь получше")
        }}
}