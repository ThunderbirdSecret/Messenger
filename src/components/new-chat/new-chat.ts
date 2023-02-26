import InputControlled from "components/input-controlled/input-controlled";
import { WithRouter } from "helpers/HOCS/WithRouter";
import { WithStore } from "helpers/HOCS/WithStore";
import { getChildInputRefs } from "helpers/getChildInputRefs";
import { getErrorsObject } from "helpers/getErrorsObject";
import { createChat } from "services/chats";
import { Block } from "utils";
import Router from "utils/Router";
import { Store } from "utils/store/Store";

type NewChatProps = {
  router: Router;
  store: Store<AppState>;
  events: Record<string, unknown>;
  onCancel: () => void;
};

type NewChatRefs = Indexed<InputControlled>;

interface SubmitEvent extends Event {
  submitter: HTMLElement;
}

class NewChat extends Block<NewChatProps, NewChatRefs> {
  static cName = "NewChat";

  constructor(props: NewChatProps) {
    super({
      ...props,
      events: {
        submit: (event: SubmitEvent) => this.onSubmit(event),
      },
    });

    this.setProps({
      onCancel: () => {
        document.querySelector('#createChat')?.classList.remove("hidden");
      },
    });
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();

    const refs = getChildInputRefs(this.refs);
    console.log(refs)
    const errors = getErrorsObject(refs);

    const { chatName } = refs;

    // setChildErrorsProps(errors, this.refs);

    if (Object.keys(errors).length === 0) {
      createChat({ title: chatName.value });
      document.querySelector('#createChat')?.classList.remove("hidden");
    }
  }

  render() {
    const { errorMessage } = this.props.store.getState();
    return `
      <div class="hidden" id="createChat">
          <form class="flex flex-col gap-y-10 p-[20px] items-center bg-zinc-700 rounded-lg z-10 absolute inset-60 w-[350px] h-[300px] shadow-lg"  onSubmit={{onSubmit}}>
          <div class="ml-auto text-white">
          {{{LinkPage onClick=onCancel linkTitle="x" type="button"}}}
          </div>
          <h3>Enter the name for the new chat</h3>
          {{{InputControlled
              onInput=onInput 
              onFocus=onFocus 
              onBlur=onBlur
              type="text"
              inputName="chatName"
              error=error
              value=""
              ref="chatName"
              childInputRef="chatName"
              placeholder="Enter any name"
          }}}
          
          <div class="flex text-sm">
              <p class='ext-red'>${errorMessage}</p>
              {{{ButtonConfirm btn="Create chat" class="px-6 text-lg" type='submit'}}}
              {{{LinkPage linkTitle='Cancel' class="px-6" onClick=onCancel type='button'}}}
          </div>
      </form>
      </div>
     `;
  }
}

export default WithStore(WithRouter(NewChat));
