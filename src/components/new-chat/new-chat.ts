import { withStore } from "helpers/HOCS/WithStore";
import { getChildInputRefs } from "helpers/getChildInputRefs";
import { getErrorsObject } from "helpers/getErrorsObject";
import { createChat } from "services/chats";
import { Block } from "utils";


type NewChatProps = {
  events?: Record<string, unknown>;
};

// type NewChatRefs = Indexed<InputControlled>;

// interface SubmitEvent extends Event {
//   submitter: HTMLElement;
// }

class NewChat extends Block {
  static cName = "NewChat";

  constructor(props: NewChatProps) {
    super({
      ...props,
      events: {
        submit: (event: SubmitEvent) => this.onSubmit(event),
        click: () => this.onCancel()
      },
    });

    // this.setProps({

    // });
  }

  onCancel() {
    document.querySelector("#createChat")?.classList.remove("hidden");
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    //@ts-ignore
    console.log("Event", event.target.value)
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
    console.log("NEW CHATS", this.props)
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
              name="chatName"
              error=error
              value=""
              ref="chatName"
              childInputRef="chatName"
              placeholder="Enter any name"
          }}}
          
          <div class="flex text-sm">
              {{{ButtonConfirm btn="Create chat" class="px-6 text-lg" type='submit'}}}
              {{{LinkPage linkTitle='Cancel' class="px-6" onClick=onCancel type='button'}}}
          </div>
        </form>
      </div>
     `;
  }
}

const withUser = withStore((state) => ({ ...state.user }))

export default withUser(NewChat);
