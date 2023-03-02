import { Block } from "utils";

interface ButtonConfirmProps {
    path?: string;
    btn?: string | SVGElement | null;
    class?: string;
    events?: {
        submit: (e: Event) => void;
    }
}//добавить get запрос при клике показывать данные get запроса в консоли

export class ButtonConfirm extends Block<ButtonConfirmProps>{
    static cName = "ButtonConfirm"
    constructor({ ...props}:ButtonConfirmProps) {
        super({...props});
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
