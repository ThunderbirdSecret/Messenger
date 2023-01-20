import Block from "utils/Block";

interface ButtonConfirmProps {
    path: string;
    btn: string;
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
            <input type="submit" class="w-[280px] h-[37px] bg-gradient-b-button-color text-white text-xl rounded-lg" value={{btn}} />
        </a>
        `
   }
}