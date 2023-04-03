import Block from "utils/Block";
import template from "./window-modal.hbs"
import CloseModal from "components/close-modal/close-modal";
import Input from "components/input/input";
import ButtonConfirm from "components/button-confirm/button-confirm";

export interface WindowModalProps {
    text: string;
    id: string;
    func: () => void;
    inputId?: string;
    btn: string

}
//TODO добавить списки и кнопку find и условия для их отображения
export default class WindowModal extends Block<WindowModalProps> {
    constructor(props: WindowModalProps){
        super(props)
    }

    init() {
        this.children.close = new CloseModal({
            modalId: this.props.id
        })

        this.children.input = new Input({
            id: this.props.inputId,
            class: "input-controlled",
            name: "modal_input",
            placeholder: "",
            // events: {
            //     input: (e: Event) => this.checkSbm(e)
            // }
        })

        this.children.button = new ButtonConfirm({
            title: this.props.btn,
            class: "button-confirm",
            id: "modal-button",
            events: {
                click: () => this.props.func(),
            }
        })

    }

        
    // checkSbm(e: Event) {
    //     //@ts-expect-error
    //     console.log(e.target.value)
    //     if(this.props.inputId){
    //     const checkPressEnter = document.getElementById(this.props.inputId)
    //     checkPressEnter?.addEventListener("keydown", (e: Event) => {
    //         e.preventDefault()
    //         console.log(e)
    //     })
    // }


    // }

    render() {
        return this.compile( template, {...this.props})
    }
}
