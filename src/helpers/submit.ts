import { SignupRequestData } from "api/typesAPI"

export function SubmitBtn(formName: string, allInput: NodeListOf<Element>, err: HTMLElement){

    if(formName === "registration") {

        if(err.innerText.trim() === ""){
            const user = {}
            allInput.forEach(elem =>{
                let name = elem.getAttribute("name")
                let value = elem.getAttribute("value")
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

}
