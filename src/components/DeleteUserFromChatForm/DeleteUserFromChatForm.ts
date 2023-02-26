import InputControlled from "components/input-controlled/input-controlled";
import { WithRouter } from "helpers/HOCS/WithRouter";
import { WithStore } from "helpers/HOCS/WithStore";
import { getChildInputRefs } from "helpers/getChildInputRefs";
import { getErrorsObject } from "helpers/getErrorsObject";
import { setChildErrorsProps } from "helpers/setChildErrorsProps";
import { deleteUserFromChat } from "services/chats";
import { Block } from "utils";
import Router from "utils/Router";
import { Store } from "utils/store/Store";


type DeleteUserFromChatFormProps = {
  router: Router;
  store: Store<AppState>;
  onSubmit: (event: SubmitEvent) => void;
  onInput: (event: FocusEvent) => void;
  onFocus: (event: FocusEvent) => void;
  onCancel: () => void;
};

type DeleteUserFromChatFormRefs = {
  [key: string]: InputControlled;
};

interface SubmitEvent extends Event {
  submitter: HTMLElement;
}

class DeleteUserFromChatForm extends Block<
  DeleteUserFromChatFormProps,
  DeleteUserFromChatFormRefs
> {
  static cName: string = "DeleteUserFromChatForm";

  constructor(props: DeleteUserFromChatFormProps) {
    super(props);
    this.setProps({
      onCancel: () => {
        let deleteUser = document.getElementById("deleteUser")
        deleteUser?.classList.add("hidden")
      },
      onSubmit: async (event: SubmitEvent) => {
        event.preventDefault();

        const refs = getChildInputRefs(this.refs);
        const errors = getErrorsObject(refs);

        const { login } = refs;

        setChildErrorsProps(errors, this.refs);

        if (Object.keys(errors).length === 0) {
          const chat = this.props.store.getState().selectedChat;

          chat && deleteUserFromChat(
            //this.props.store,
             { login: login.value, chat });
        }
      },
    });
  }

  render() {
    const { errorMessage } = this.props.store.getState();
    return `
      <div class="hidden" id="deleteUser">        
        <form class="flex flex-col gap-y-[18px] p-[20px] items-center bg-zinc-700 rounded-lg z-10 absolute inset-60 w-[350px] h-[300px] shadow-lg" action='#'>
                {{{Button class="ml-auto" onClick=onCancel title='x' type='button'}}}

                <h3>Enter user login to delete</h3>

                {{{InputControlled
                    onInput=onInput 
                    onFocus=onFocus 
                    onBlur=onBlur
                    type="text"
                    inputName="login"
                    error=error
                    value=''
                    ref="login"
                    childInputRef="login"
                    placeholder="Enter login"
                }}}
                
                <div class="flex text-sm">
                  <p class='text-red'>${errorMessage}</p>
                    {{{ Button  title="Delete user" class="px-2" onClick=onSubmit type="submit"}}}
                    {{{ Button  title="Cancel" class="px-2" onClick=onCancel type="button"}}}
                    
                </div>
            </form>
      </div>
        `;
  }
}

export default WithStore(WithRouter(DeleteUserFromChatForm));
