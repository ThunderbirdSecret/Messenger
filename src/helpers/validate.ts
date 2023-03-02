const regExpValidate = {
    Login: /^[a-zA-Z][a-zA-Z0-9-_\.][^\s]{1,20}$/,
    Password: /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/,
    Email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    Name: /^[A-ZА-ЯЁ]{1,}[-A-Za-zА-Яа-яЁё]{0,}$/,
    Phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
}

export function InputValidate(nameEvent: string, el: HTMLInputElement, err: any, context: any) {
    if(nameEvent === "blur"){
        if(el.name === "chatName") {
            return console.log("Допустим")
        }
        if(el.name! === "login") {
            if(!regExpValidate.Login.test(el.value)) {
                return err.setProps({text: "Логин не корректный!"})
            } else {
                return context.setProps({ value: el.value})
            }
        }

        if(el.name! === "password") {
            if(!regExpValidate.Password.test(el.value)) {
                return err.setProps({text: "пароль не корректный!"})
            } else {
                return context.setProps({ value: el.value})
            }
        }

        if(el.name === "email") {
            if(!regExpValidate.Email.test(el.value)) {
                return err.setProps({text: "email не корректный!"})
            } else {
                return context.setProps({ value: el.value})
            }
        }

        if(el.name === "phone") {
            if(!regExpValidate.Phone.test(el.value)) {
                return err.setProps({text: "Номер не корректный!"})
            } else {
                return context.setProps({ value: el.value})
            }
        }

        if(el.name === "first_name") {
            if(!regExpValidate.Name.test(el.value)) {
                return err.setProps({text: "В имени должны быть только буквы!"})
            } else {
                return context.setProps({ value: el.value})
            }
        }

        if(el.name === "second_name") {
            if(!regExpValidate.Name.test(el.value)) {
                return err.setProps({text: "В фамилии должны быть только буквы!"})
            } else {
                return context.setProps({ value: el.value})
            }
        }

        if(el.name === "display_name") {
            if(!regExpValidate.Name.test(el.value)) {
                return err.setProps({text: "Не корректный дисплейнейм!"})
            } else {
                return context.setProps({ value: el.value})
            }
        }

        if(el.name === "old_password") {
            if(!el.value) {
                return err.setProps({text: "что-нибудь напиши"})
            } else {
                return context.setProps({ value: el.value})
            }
        }

        if(el.name === "password_check") {
            let target = document.querySelector('input[name="password"]') as HTMLInputElement;
                if (target) {
                    let password = target.value;
                    if(el.value !== password || el.value === '') {
                        return err.setProps({text: "пароли не совпадают!"})
                    } else {
                        return context.setProps({ value: el.value})
                    }
                }
        }
    }
}
