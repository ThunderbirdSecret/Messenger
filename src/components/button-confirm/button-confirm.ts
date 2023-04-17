import Block from "utils/Block";
import template from "./button-confirm.hbs"
interface ButtonConfirmProps {
    title: string | HTMLImageElement;
    class: string;
    id?: string;
    btnImg?: boolean;
    events?: {
        click?: ()=> void;
        submit?: (e: Event) => void
    }
}
export default class ButtonConfirm extends Block<ButtonConfirmProps>{
    constructor(props:ButtonConfirmProps){
        super(props)
    }

    render(){
        return this.compile(template, {...this.props});
    }
}
