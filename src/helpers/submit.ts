import { isEmpty } from "./isEmpty"

export function SubmitBtn(event: Event, formName: string, refs: any){
    event.preventDefault()
    event.stopPropagation()
    if(formName === "authorization") {

        let formsAuth = {
            loginAuth: refs.login.inputControlled.props.value,
            passwordAuth: refs.password.inputControlled.props.value,
        }

        let errAuth = {
            loginErrAuth: refs.login.refs.err.props.text,
            passwordErrAuth: refs.password.refs.err.props.text
        }

        if((isEmpty(formsAuth)) && (!isEmpty(errAuth))) {
            console.log(formsAuth)
        } else {
            return refs.err.setProps({ text: "Некорректно заполнены формы!"})
        }
    }
    if(formName === "registration") {
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
            return refs.err.setProps({ text: "Некорректно заполнены формы!"})
        }
        
    }
    if(formName === "settings") {
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

        if((isEmpty(formsSet)) && (!isEmpty(errSet))) {
            console.log(formsSet)
        } else {
            return refs.err.setProps({ text: "Некорректно заполнены формы!"})
        }

    }
    if(formName === "password") {
        let formsPass = {
            passwordCheckPass: refs.passportCheck.refs.inputControlled.props.value,
            passwordPass: refs.password.refs.inputControlled.props.value,
            oldPasswordPass: refs.oldPassword.refs.inputControlled.props.value
        }

        let errPass = {
            passwordCheckErrPass: refs.passportCheck.refs.err.props.text,
            passwordErrPass: refs.password.refs.err.props.text,
            oldPasswordErrPass: refs.oldPassword.refs.err.props.text
        }

        if((isEmpty(formsPass)) && (!isEmpty(errPass))) {
            console.log(formsPass)
        } else {
            return refs.err.setProps({ text: "Некорректно заполнены формы!"})
        }
        
    }
}