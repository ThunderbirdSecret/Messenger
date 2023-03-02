import { ValidateType, validateForm } from "helpers/checkers and validators/validateForm";
import { Block } from "utils";
import { DataItemProps } from "../DataItem/DataItem";

type IncomingUserDataInputProps = DataItemProps & {
    name: string;
    error?: string;
  };
  
  // type UserDataInputProps = IncomingUserDataInputProps & {
  //   onInputEvent?: (event: FocusEvent) => void;
  // };
  
  // type UserDataInputRefs = Record<string, Input | undefined>;
  
  export default class UserDataInput extends Block {
    static cName = "UserDataInput";
  
    constructor({ title, data, type, error = '', name: inputName }: IncomingUserDataInputProps) {
      super({
        title,
        data,
        type,
        error,
        name: inputName,
        onInputEvent: (event: FocusEvent) => {
          const target = event.target as HTMLInputElement;
          const errorObject = validateForm([{ name: inputName as ValidateType, input: target }])[
            inputName
          ];
          this.refs.errorRef?.setProps({ error: errorObject });
        },
      });
    }
  
    render() {
      return `
              <div class="w-full">
                <div class="flex flex-wrap justify-center gap-x-52 w-[510px] ">
                  <div class="mr-auto text-bold">{{title}}</div>
                  {{{Input
                      ref=childRef
                      type=type
                      placeholder=""
                      name=inputName
                      value=data
                      class="ml-auto bg-transparent text-end focus:outline-none"
                      onInput=onInputEvent
                      onFocus=onInputEvent
                      onBlur=onInputEvent
                  }}}
                </div>
                  
                {{{ErrorComponent ref="errorRef"}}}
              </div>
          `;
    }
  }
