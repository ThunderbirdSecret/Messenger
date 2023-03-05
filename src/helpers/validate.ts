const regExpValidate = {
    Login: /^[a-zA-Z][a-zA-Z0-9-_\.][^\s]{1,20}$/,
    Password: /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/,
    Email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    Name: /^[A-ZА-ЯЁ]{1,}[-A-Za-zА-Яа-яЁё]{0,}$/,
    Phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
}

export function InputValidate(pageName: string, el: HTMLInputElement, err: HTMLElement) {
    err.innerText = ""
    if(el.name === "chatName") {
        return console.log("Допустим")
    }

    if(pageName === "Authorization"){
        err.innerText = ""
        if(el.value.trim() === "") {
            return err!.innerText = "Заполните формы!"
        }
        return
    }
    if(pageName === "Registration"){

    if(el.name! === "login") {
        if(!regExpValidate.Login.test(el.value)) {
            return err.innerText = "Логин не корректный!"
        } else {
           return
        }
    }

    if(el.name! === "password") {
        if(!regExpValidate.Password.test(el.value)) {
            return err.innerText = "Пароль не корректный!"
        } else {
            return
        }
    }

    if(el.name === "email") {
        if(!regExpValidate.Email.test(el.value)) {
            return err.innerText= "email не корректный!"
        } else {
            return
        }
    }

    if(el.name === "phone") {
        if(!regExpValidate.Phone.test(el.value)) {
            return err.innerText = "Номер не корректный!"
        } else {
            return
        }
    }

    if(el.name === "first_name") {
        if(!regExpValidate.Name.test(el.value)) {
            return err.innerText = "В имени должны быть только буквы!"
        } else {
            return
        }
    }

    if(el.name === "second_name") {
        if(!regExpValidate.Name.test(el.value)) {
            return err.innerText = "В фамилии должны быть только буквы!"
        } else {
            return 
        }
    }

    if(el.name === "display_name") {
        if(!regExpValidate.Name.test(el.value)) {
            return err.innerText = "Не корректный дисплейнейм!"
        } else {
            return
        }
    }

    if(el.name === "password_check") {
        let target = document.querySelector('input[name="password"]') as HTMLInputElement;
            if (target) {
                let password = target.value;
                if(el.value !== password || el.value === '') {
                    return err.innerText = "пароли не совпадают!"
                } else {
                    return
                }
            }
    }
}

// if(el.name === "old_password") {
//     if(!el.value) {
//         return err.innerText = "что-нибудь напиши"
//     } else {
//         return
//     }
// }

}
