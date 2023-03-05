import Block from "utils/Block";
import template from "./title.hbs"

interface TitleProps {
    title: string;
}

class Title extends Block<TitleProps> {    
    constructor({title}:TitleProps){
        super({title})
    }

    render() {
        return this.compile(template, {...this.props})
    }
}

export default Title;
