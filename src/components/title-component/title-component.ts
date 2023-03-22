import Block from "utils/Block";
import template from "./title.hbs"

interface TitleProps {
    title: string;
}

export default class TitleComponent extends Block<TitleProps> {    
    constructor({title}:TitleProps){
        super({title})
    }

    render() {
        return this.compile(template, {...this.props})
    }
}
