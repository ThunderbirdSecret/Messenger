import Block from "utils/Block";
import template from "./window-modal.hbs"
import CloseModal from "components/close-modal/close-modal";
import Input from "components/input/input";
import ButtonConfirm from "components/button-confirm/button-confirm";

interface WindowModalProps {
    text: string;
    id: string;
    func: () => void;
}

export default class WindowModal extends Block {
    constructor(props: WindowModalProps){
        super(props)
    }

    init() {
        this.children.close = new CloseModal({
            modalId: this.props.id
        })

        this.children.input = new Input({
            id: "modal_input",
            class: "input-controlled",
            name: "modal_input",
            placeholder: ""
        })

        this.children.button = new ButtonConfirm({
            title: "Add",
            class: "button-confirm",
            events: {
                click: () => this.props.func()
            }
        })
    }

    render() {
        return this.compile( template, {...this.props})
    }
}
