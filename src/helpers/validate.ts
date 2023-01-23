const regExpValidate = {
    Login: /^[a-zA-Z][a-zA-Z0-9-_\.][^\s]{1,20}$/,
    Password: /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/,
    Email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    Name: /^[A-ZА-ЯЁ]{1,}[-A-Za-zА-Яа-яЁё]{0,}$/,
    Phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
}

export function InputValidate(nameEvent: string, el: HTMLInputElement, err: any, refs: any) {
    if(nameEvent === "blur"){
        if(el.name! === "login") {
            if(!regExpValidate.Login.test(el.value)) {
                return err.setProps({text: "Логин кривой!"})
            } else {
                refs.inputControlled.setProps({ value: el.value})
            }
        }

        if(el.name! === "password") {
            if(!regExpValidate.Password.test(el.value)) {
                return err.setProps({text: "пароль не очень!"})
            } else {
                refs.inputControlled.setProps({ value: el.value})
            }
        }

        if(el.name === "email") {
            if(!regExpValidate.Email.test(el.value)) {
                return err.setProps({text: "email должен выглядеть не так!"})
            } else {
                refs.inputControlled.setProps({ value: el.value})
            }
        }

        if(el.name === "phone") {
            if(!regExpValidate.Phone.test(el.value)) {
                return err.setProps({text: "Номер нормально пиши!"})
            } else {
                refs.inputControlled.setProps({ value: el.value})
            }
        }

        if(el.name === "name") {
            if(!regExpValidate.Name.test(el.value)) {
                return err.setProps({text: "Че за знаки в Имени?!"})
            } else {
                refs.inputControlled.setProps({ value: el.value})
            }
        }

        if(el.name === "second_name") {
            if(!regExpValidate.Name.test(el.value)) {
                return err.setProps({text: "Че ты в фамилии написал?!"})
            } else {
                refs.inputControlled.setProps({ value: el.value})
            }
        }

        if(el.name === "display_name") {
            if(!regExpValidate.Name.test(el.value)) {
                return err.setProps({text: "Стремный дисплейнейм!"})
            } else {
                refs.inputControlled.setProps({ value: el.value})
                console.log(refs.inputControlled.props.value)
            }
        }

        if(el.name! === "old_password") {
            if(!el.value) {
                return err.setProps({text: "что-нибудь напиши"})
            } else {
                refs.inputControlled.setProps({ value: el.value})
            }
        }

        if(el.name === "password_check") {
            let target = document.querySelector('input[type="password"]') as HTMLInputElement;
                if (target) {
                    let password = target.value;
                    if(el.value !== password || el.value === '') {
                        return err.setProps({text: "пароли не совпадают!"})
                    } else {
                        refs.inputControlled.setProps({ value: el.value})
                    }
                }
        }
    }
}


