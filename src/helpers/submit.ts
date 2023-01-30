import { isEmpty } from "./isEmpty"

export function SubmitBtn(event: Event, formName: string, refs: any){
    event.preventDefault()
    event.stopPropagation()

    if(formName === "authorization") {
        refs.errAuth.setProps({ text: ""})

        let formsAuth = {
            loginAuth: refs.login.refs.inputControlled.props.value,
            passwordAuth: refs.password.refs.inputControlled.props.value,
        }

        let errAuth = {
            loginErrAuth: refs.login.refs.err.props.text,
            passwordErrAuth: refs.password.refs.err.props.text
        }

        if((isEmpty(formsAuth)) && (!isEmpty(errAuth))) {
            console.log(formsAuth)
        } else {
            return refs.errAuth.setProps({ text: "Некорректно заполнены формы!"})
        }
    }
    if(formName === "registration") {
        refs.errReg.setProps({ text: ""})

        let formsReg = {
            loginReg: refs.login.refs.inputControlled.props.value,
            passwordReg: refs.password.refs.inputControlled.props.value,
            passwordCheckReg: refs.passwordCheck.refs.inputControlled.props.value,
            nameReg: refs.name.refs.inputControlled.props.value,
            secondNameReg: refs.secondName.refs.inputControlled.props.value,
            displayNameReg: refs.displayName.refs.inputControlled.props.value,
            phoneReg: refs.phone.refs.inputControlled.props.value,
            emailReg: refs.email.refs.inputControlled.props.value,
        }

        let errReg = {
            loginErrReg: refs.login.refs.err.props.text,
            passwordErrReg: refs.password.refs.err.props.text,
            passwordCheckReg: refs.passwordCheck.refs.err.props.text,
            nameReg: refs.name.refs.err.props.text,
            secondNameReg: refs.secondName.refs.err.props.text,
            displayNameReg: refs.displayName.refs.err.props.text,
            phoneReg: refs.phone.refs.err.props.text,
            emailReg: refs.email.refs.err.props.text,
        }

        if((isEmpty(formsReg)) && (!isEmpty(errReg))) {
            console.log(formsReg)
        } else {
            return refs.errReg.setProps({ text: "Некорректно заполнены формы!"})
        }
        
    }
    if(formName === "settings") {
        refs.errSet.setProps({ text: ""})
        let formsSet = {
            loginSet: refs.login.refs.inputControlled.props.value,
            nameSet: refs.name.refs.inputControlled.props.value,
            secondNameSet: refs.secondName.refs.inputControlled.props.value,
            displayNameSet: refs.displayName.refs.inputControlled.props.value,
            phoneSet: refs.phone.refs.inputControlled.props.value,
            emailSet: refs.email.refs.inputControlled.props.value,
        }

        let errSet = {
            loginErrSet: refs.login.refs.err.props.text,
            nameSet: refs.name.refs.err.props.text,
            secondNameSet: refs.secondName.refs.err.props.text,
            displayNameSet: refs.displayName.refs.err.props.text,
            phoneSet: refs.phone.refs.err.props.text,
            emailSet: refs.email.refs.err.props.text,
        }

        let plhSet = {
            loginSet: refs.login.props.placeholder,
            nameSet: refs.name.props.placeholder,
            secondNameSet: refs.secondName.props.placeholder,
            displayNameSet: refs.displayName.props.placeholder,
            phoneSet: refs.phone.props.placeholder,
            emailSet: refs.email.props.placeholder,
        }

        console.log("Eсли нужно поменять только одну из форм, то у остальных надо активировать onBlur")
        if(isEmpty(formsSet)) {
               return console.log(formsSet)
            } else {
            return console.log(plhSet)
        }

    }
    if(formName === "password") {
        refs.errPass.setProps({ text: ""})
        let formsPass = {
            passwordCheckPass: refs.passwordCheck.refs.inputControlled.props.value,
            passwordPass: refs.password.refs.inputControlled.props.value,
            oldPasswordPass: refs.oldPassword.refs.inputControlled.props.value
        }

        let errPass = {
            passwordCheckErrPass: refs.passwordCheck.refs.err.props.text,
            passwordErrPass: refs.password.refs.err.props.text,
            oldPasswordErrPass: refs.oldPassword.refs.err.props.text
        }


        if((isEmpty(formsPass)) && (!isEmpty(errPass))) {
            console.log(formsPass)
        } else {
            return refs.errPass.setProps({ text: "Некорректно заполнены формы!"})
        }
        
    }

    if(formName === "dialog") {
        let dialogMessage = refs.messageInput.refs.message
        if(dialogMessage.props.value){
            console.log("submit ", dialogMessage.props.value)
            return refs.messageInput.refs.message.setProps({value: ""})
        }
        return console.log("пустое сообщение")
    }
}
