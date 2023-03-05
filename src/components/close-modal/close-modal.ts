import { Block } from "utils";

interface CloseModalProps {
    // idModal?: string;
    events?: {
        click:() => void
    }
}

export default class CloseModal extends Block {
    static cName = "CloseModal"

    constructor(props:CloseModalProps){
        super({props, events: { click: ()=> this.onClose()}})
    }

    onClose() {
            let el = document.getElementById("createChat")
            return el!.classList.add("hidden");
        
      } 

    render() {
        return `
        {{{LinkPage linkTitle="x" type="button"}}}
        `
    }
}
