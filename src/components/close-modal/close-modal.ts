import Block from "utils/Block";
import template from "./close-modal.hbs"
import ButtonConfirm from "components/button-confirm/button-confirm";
interface CloseModalProps {
    modalId: string;
}

export default class CloseModal extends Block<CloseModalProps> {

    constructor(props:CloseModalProps){
        super(props)
    }

    init() {

        this.children.close = new ButtonConfirm({
            class:"text-white border-none",
            title: "x",
            events: {
                click: () => this.onClose()
            }
        })
    }

    onClose() {
            let el = document.getElementById(this.props.modalId)
            return el!.classList.toggle("hidden");
        
      } 

    render() {
        return this.compile( template, {...this.props})
    }
}
