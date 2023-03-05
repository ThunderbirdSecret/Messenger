import controller from "services/ChatsController";
import { Block } from "utils";


type NewChatProps = {
  events?: Record<string, unknown>;
};

class NewChat extends Block {
  static cName = "NewChat";

  constructor(props: NewChatProps) {
    super({
      ...props,
      events: {
        submit: (event: SubmitEvent) => this.onSubmit(event),
      },
    });
  }

 
  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    let inputEl = document.getElementById("input-chat") as HTMLInputElement
    controller.create(inputEl.value)
      document.querySelector('#createChat')?.classList.toggle("hidden");
  }

  render() {
    console.log("NEW CHATS", this)
    return `
        <form id="createChat" class="hidden flex flex-col gap-y-10 p-[20px] items-center bg-zinc-700 rounded-lg z-10 absolute inset-60 w-[350px] h-[300px] shadow-lg" onSubmit={{onSubmit}}>
          <div class="ml-auto text-white">
          {{{CloseModal }}}
          </div>
          <h3>Enter the name for the new chat</h3>
          {{{Input
             class="h-9 w-[280px] bg-transparent focus:outline-none border-b-2 border-blue text-base p-2 text-white"
             name="new_chat"
             value=""
             id="input-chat"
          }}}
          
          <div class="flex text-sm">
              {{{ButtonConfirm btn="Create chat" class="px-6 text-lg" type="submit"}}}
          </div>
        </form>
     `;
  }
}

export default NewChat;
