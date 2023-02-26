import { Block } from "utils";

interface ButtonConfirmProps {
    path?: string;
    btn?: string | SVGElement | null;
    class?: string;
    onSubmit?: (e: Event) => void 
    events?: {
        submit?: (e: Event) => void
    }
}//добавить get запрос при клике показывать данные get запроса в консоли

export class ButtonConfirm extends Block<ButtonConfirmProps>{
    static cName = "ButtonConfirm"
    constructor({ onSubmit, ...props}:ButtonConfirmProps) {
        super({...props, events: {
            submit: onSubmit
        }});
    }

   protected render() {
       return `
        <a href={{path}}>
            <input type="submit" 
            class="{{class}}" 
            value={{btn}} 
            onSubmit=onSubmit 
            type="submit"s
            />
        </a>
        `
   }
}

export default ButtonConfirm;
