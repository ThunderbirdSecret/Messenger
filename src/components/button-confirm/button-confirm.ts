import Block from "utils/Block";
import template from "./button-confirm.hbs"
interface ButtonConfirmProps {
    title: string;
    class: string;
    events?: {
        click: ()=> void;
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
