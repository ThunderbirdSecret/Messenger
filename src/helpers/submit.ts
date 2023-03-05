import { SignupRequestData } from "api/typesAPI"

export function SubmitBtn(formName: string, allInput: NodeListOf<Element>, err: HTMLElement){

    if(formName === "registration") {

        if(err.innerText.trim() === ""){
            const user = {}
            allInput.forEach(elem =>{
                let name = elem.getAttribute("name")
                let value = elem.getAttribute("value")
                console.log(value)
                if(value!.trim() === "" || value === undefined){
                    err.innerText = "Не все формы заполнены!"
                    return
                }
                //@ts-expect-error
                user[name] = value
            })
        if(user){

            const data: SignupRequestData = {
                login: (user as UserType).login,
                password: (user as UserType).password,
                first_name: (user as UserType).first_name,
                second_name: (user as UserType).second_name,
                email: (user as UserType).email,
                phone: (user as UserType).phone
            }

            return data
        } 
    } else {
        err.innerText = "Некорректно заполнены формы!"
        return
    }
}

    // if(formName === "settings") {
    //     refs.errSet.setProps({ text: ""})
    //     let formsSet = {
    //         loginSet: refs.login.refs.inputControlled.props.value,
    //         nameSet: refs.name.refs.inputControlled.props.value,
    //         secondNameSet: refs.secondName.refs.inputControlled.props.value,
    //         displayNameSet: refs.displayName.refs.inputControlled.props.value,
    //         phoneSet: refs.phone.refs.inputControlled.props.value,
    //         emailSet: refs.email.refs.inputControlled.props.value,
    //     }

    //     // let errSet = {
    //     //     loginErrSet: refs.login.refs.err.props.text,
    //     //     nameSet: refs.name.refs.err.props.text,
    //     //     secondNameSet: refs.secondName.refs.err.props.text,
    //     //     displayNameSet: refs.displayName.refs.err.props.text,
    //     //     phoneSet: refs.phone.refs.err.props.text,
    //     //     emailSet: refs.email.refs.err.props.text,
    //     // }

    //     let plhSet = {
    //         loginSet: refs.login.props.placeholder,
    //         nameSet: refs.name.props.placeholder,
    //         secondNameSet: refs.secondName.props.placeholder,
    //         displayNameSet: refs.displayName.props.placeholder,
    //         phoneSet: refs.phone.props.placeholder,
    //         emailSet: refs.email.props.placeholder,
    //     }

    //     console.log("Eсли нужно поменять только одну из форм, то у остальных надо активировать onBlur")
    //     if(isEmpty(formsSet)) {
    //            return console.log(formsSet)
    //         } else {
    //         return console.log(plhSet)
    //     }

    // }
    // if(formName === "password") {
    //     refs.errPass.setProps({ text: ""})
    //     let formsPass = {
    //         passwordCheckPass: refs.passwordCheck.refs.inputControlled.props.value,
    //         passwordPass: refs.password.refs.inputControlled.props.value,
    //         oldPasswordPass: refs.oldPassword.refs.inputControlled.props.value
    //     }

    //     let errPass = {
    //         passwordCheckErrPass: refs.passwordCheck.refs.err.props.text,
    //         passwordErrPass: refs.password.refs.err.props.text,
    //         oldPasswordErrPass: refs.oldPassword.refs.err.props.text
    //     }


    //     if((isEmpty(formsPass)) && (!isEmpty(errPass))) {
    //         console.log(formsPass)
    //     } else {
    //         return refs.errPass.setProps({ text: "Некорректно заполнены формы!"})
    //     }
        
    // }
    if(formName === "dialog") {
        let dialogMessage = refs.messageInput.refs.message
        if(dialogMessage.props.value){
            console.log("submit ", dialogMessage.props.value)
            return refs.messageInput.refs.message.setProps({value: ""})
        }
        return console.log("пустое сообщение")
    }
}
