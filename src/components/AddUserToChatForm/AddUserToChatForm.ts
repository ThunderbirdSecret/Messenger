import InputControlled from "components/input-controlled/input-controlled";
import { WithRouter } from "helpers/HOCS/WithRouter";
import { WithStore } from "helpers/HOCS/WithStore";
import { getChildInputRefs } from "helpers/getChildInputRefs";
import { getErrorsObject } from "helpers/getErrorsObject";
import { setChildErrorsProps } from "helpers/setChildErrorsProps";
import { addUserToChat } from "services/chats";
import { Block } from "utils";
import Router from "utils/Router";
import { Store } from "utils/store/Store";

type AddUserToChatFormProps = {
  router: Router;
  store: Store<AppState>;
  events: Record<string, unknown>;
  onCancel: () => void;
  onSubmit: (event: SubmitEvent) => void;
  onInput: (event: FocusEvent) => void;
  onFocus: (event: FocusEvent) => void;
};


interface SubmitEvent extends Event {
  submitter: HTMLElement;
}

type AddUserToChatFormRefs = Indexed<InputControlled>;

class AddUserToChatForm extends Block<AddUserToChatFormProps, AddUserToChatFormRefs> {
  static cName: string = "AddUserToChatForm";

  constructor(props: AddUserToChatFormProps) {
    super({ ...props, events: { submit: (event: SubmitEvent) => this.onSubmit(event) } });
  }

  async onSubmit(event: SubmitEvent) {
    event.preventDefault();

    const refs = getChildInputRefs(this.refs);
    const errors = getErrorsObject(refs);
    const { login } = refs;

    setChildErrorsProps(errors, this.refs);

    if (Object.keys(errors).length === 0) {
      const chat = this.props.store.getState().selectedChat;

      if (chat) {
        await addUserToChat({ login: login.value, chat });
      }
    }
  }

  render() {
    const { errorMessage } = this.props.store.getState();
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
                  <p class="text-red">${errorMessage}</p>

                    {{{ LinkPage linkTitle="Add user" class="px-2 bg-button-color w-[60px] h-[30px]" onClick=onSubmit type="submit"}}}
                    {{{ LinkPage linkTitle="Cancel" class="px-2" onClick=onCancel type="button"}}}
                    
                </div>
            </form>
      </div>
        `;
  }
}

export default WithStore(WithRouter(AddUserToChatForm));
