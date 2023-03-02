import { withStore } from "helpers/HOCS/WithStore";
import { Block } from "utils";

interface AddUserToChatFormProps {
  events?: {
    // click: () => void;
    submit?: (e: Event) => void;
    // input: (e: FocusEvent) => void
    // focus: (event: FocusEvent) => void;
  }
};


// interface SubmitEvent extends Event {
//   submitter: HTMLElement;
// }
class AddUserToChatForm extends Block {
  static cName: string = "AddUserToChatForm";

  constructor( props: AddUserToChatFormProps) {
    super({props, events: {
        submit: (e: Event) => this.onSubmit(e)
    }});
  }

  async onSubmit(event:Event) {
    event.preventDefault();
    console.log("submit worked!")}
    // const refs = getChildInputRefs(this.refs);
    // const errors = getErrorsObject(refs);
    // const { login } = refs;

    // setChildErrorsProps(errors, this.refs);

    // if (Object.keys(errors).length === 0) {
    //   const chat = this.props.store.getState().selectedChat;

    //   if (chat) {
    //     await addUserToChat({ login: login.value, chat });
    //   }
    // }

  render() {
    return `
      <div class="hidden" id="addUser">
      <form class="flex flex-col gap-y-[18px] p-[20px] items-center bg-zinc-700 rounded-lg z-10 absolute inset-60 w-[350px] h-[300px] shadow-lg" action="#">
                {{{Button class="ml-auto" type="button" onClick=onCancel title="x"}}}

                <h3>Enter user login to add</h3>

                {{{InputControlled
                    onInput=onInput 
                    onFocus=onFocus 
                    onBlur=onBlur
                    type="text"
                    inputName="login"
                    error=error
                    value=""
                    ref="login"
                    childInputRef="login"
                    placeholder="Enter login"
                }}}
                
                <div class="flex text-sm">
                  <p class="text-red"></p>

                    {{{ LinkPage linkTitle="Add user" class="px-2 bg-button-color w-[60px] h-[30px]" onClick=onSubmit type="submit"}}}
                    {{{ LinkPage linkTitle="Cancel" class="px-2" onClick=onCancel type="button"}}}
                    
                </div>
            </form>
      </div>
        `;
  }
}
const withUser = withStore((state) => ({ ...state.user }))

export default withUser(AddUserToChatForm);
