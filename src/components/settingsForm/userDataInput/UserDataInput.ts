import Block from "utils/Block";
import template from "./user-data-input.hbs"
import Input from "components/input/input";

  interface DataInputProps{
    title: string;
    type: "phone" | "text" | "password" | "email";
    placeholder: string;
    value?: string | HTMLInputElement;
    name: string;
    id: string;
    class?: string;
  }
class UserDataInput extends Block<DataInputProps>{
  
    constructor(props: DataInputProps) {
      super(props);
    }


    init() {
      this.children.input = new Input({
          id: this.props.id,
          type: this.props.type,
          placeholder: this.props.placeholder,
          value: this.props.value,
          name: this.props.name,
          class: "input-setting py-1",
          events: {
            blur: (e: FocusEvent) => this.onBlur(e)
          }
      })
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

    onBlur(e: FocusEvent) {
      const el = (e.target as HTMLInputElement).value
      this.setProps({value: el})
    }

    // Input(e: FocusEvent){
    //   const el = (e!.target as HTMLInputElement)
    //   this.setProps({value: el})
    // }

    render() {
      return this.compile(template, {...this.props})
    }
  }

  export default UserDataInput
