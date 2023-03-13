import Block from "utils/Block";
import template from "./input.hbs"

interface InputProps {
    type?: "phone" | "text" | "password" | "email" | "file";
    placeholder?: string;
    value?: string | HTMLInputElement | HTMLImageElement | File
    name?: string;
    status?: string;
    accept?: string;
    id?: string;
    class?: string;
    events?: {
        input?: (e: FocusEvent) => void;
        focus?: (e: FocusEvent) => void;
        blur?: (e: FocusEvent) => void;
        change?: (e: Event) => void;
      };
}
  
class Input extends Block<InputProps>{
    constructor(props: InputProps) {
        super(props);
    }

    public setValue(value: string) {
        return (this.element as HTMLInputElement).value = value;
      }
    
      public getName() {
        return (this.element as HTMLInputElement).name;
      }
    
      public getValue() {
        return (this.element as HTMLInputElement).value;
      }

    render() {
        return this.compile(template, { ...this.props });
      }
}

export default Input;
