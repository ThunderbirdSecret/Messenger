import Block from "utils/Block";
import template from "./error-component.hbs"

interface ErrorComponentProps {
    text?: string;
    id?: string;
}

class ErrorComponent extends Block<ErrorComponentProps>{
 constructor(props:ErrorComponentProps){
    super(props)
 }

render() {
    return this.compile(template, {...this.props});
 }
}


export default ErrorComponent;
