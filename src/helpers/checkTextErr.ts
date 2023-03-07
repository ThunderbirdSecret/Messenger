import { isEmpty } from "./isEmpty"

export default function checkTextErr(allNodeErr: NodeListOf<Element>):boolean{
    const allErr:[] = []
    allNodeErr.forEach((elem) =>{
            elem.getAttribute("text-red pt-2")
                        //@ts-expect-error
             allErr.push(elem.innerText)
        })

        return isEmpty(allErr)
}
