import Block from "utils/Block";

interface ButtonConfirmProps {
    path?: string;
    btn?: string | SVGElement | null;
    class?: string;
    onSubmit?: () => void 
}//добавить get запрос при клике показывать данные get запроса в консоли

export class ButtonConfirm extends Block{
    static cName = "ButtonConfirm"
    constructor({ onSubmit, ...props}:ButtonConfirmProps) {
        super({...props, events: {click: onSubmit}});
    }

   protected render() {
       return `
        <a href={{path}}>
            <input type="submit" 
            class="{{class}}" 
            value={{btn}} />
        </a>
        `
   }
}
