import Block from "utils/Block";
import template from "./user-menu.hbs"

interface UserMenuProps {
    title: string;
    events: {
        click: ()=> void
    }
}

export default class UserMenu extends Block{

    constructor(props:UserMenuProps){
        super(props)
    }

    render() {
        return this.compile( template, {...this.props})
    }
}
