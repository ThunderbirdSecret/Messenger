// import { Input, MessageInput } from "components"
import { Block } from "utils"

interface SubmitEvent extends Event {
    submitter: HTMLElement;
  }

type DialogProps = {
    chats?: Nullable<Array<ChatType>>;
    events?: Record<string, unknown>;
    toggleShowChatMenu?: () => void;
    toggleShowAddUserForm?: () => void;
    toggleShowDeleteUserForm?: () => void;
    onClick?: (e: Event) => void;
}

const icon = new Image()
icon.src = require("asserts/threepoint.svg")

export class Dialog extends Block {
    static cName = "Dialog"
    constructor(props: DialogProps) {
      super({...props
        });
    
      this.setProps({
    //     chats: window.store.getState().chats,
  
    //     navigateToProfile: async () => {
    //       this.props.router.go("/settings");
    //     },
        
    //     toggleShowChatMenu: () => {
    //       document.querySelector('.chat-menu')?.classList.toggle('hidden');
    //     },
    //     toggleShowAddUserForm: () => {
    //       document.querySelector('#addUser')?.classList.toggle('form-container_shown');
    //       document.querySelector('.chat-menu')?.classList.remove('chat-menu_shown');
    //     },
    //     toggleShowDeleteUserForm: () => {
    //       document.querySelector('#deleteUser')?.classList.toggle("hidden");
    //       document.querySelector('.chat-menu')?.classList.remove('chat-menu_shown');
    //     },

      });}
      
    //   console.log("props", this.props)
    // }
  
    // componentDidUpdate() {
    //   if (window.store.getState().currentRoutePathname !== "/messenger") {
    //     return false;
    //   }
    //   this.children = {};
    //   return true;
    // }
  
    onSubmit(event: SubmitEvent) {
      event.preventDefault();}
  
    //   const refs = Object.entries(this.refs).reduce((acc, [key, value]) => {
    //     acc[key] = value.getContent() as HTMLInputElement;
    //     return acc;
    //   }, {} as { [key: string]: HTMLInputElement });
  
    //   const { messageRef } = refs;
  
    //   const errors = ""
  
    //   if (Object.keys(errors).length === 0) {
    //     const chat = window.store.getState().selectedChat;
    //     if (chat) {
    //       sendMessage(messageRef.value, chat);
    //     }
    //   console.log("message ref", messageRef.value)
    //     messageRef.value = '';
    //   }
    // }
    // {{{AddUserToChatForm onCancel=toggleShowAddUserForm}}}
    // {{{DeleteUserFromChatForm onCancel=toggleShowDeleteUserForm}}}
  
    render() {
      console.log("this", this)
      // const { selectedChat } = window.store.getState();
      // const { id, title = [] } = selectedChat || {};
  
        return `
            <main class="h-[760px] w-cover flex flex-row overflow-hidden">
            {{{ Loader }}}
                <div class="basis-1/4 bg-graphite h-screen  overflow-y-scroll scrollbar">
                    {{{ HeaderListDialog }}}

                    <div class="chat-list">
                      <article class="h-content">
                        {{{ ChatsList }}}
                      </article>
                    </div>
                    <div class="text-blue text-bold text-sm text-center">
                      {{{LinkCreateChat}}}
                      {{{NewChat}}}

                    </div>
                </div>
                <div class="basis-3/4 bg-transparent">
                {{#if id}}
                  <div id="header_chat">
                    <div class="flex items-center gap-x-3 m-[13px]">
                      <div class="min-w-[34px] min-h-[34px] rounded-full bg-blue"></div>
                        <div>
                            <strong>title</strong>
                        </div>
                        <div class="ml-auto ">
                          <a href={{path}}>
                            <button class="px-4">
                              <img alt="icon" src=${icon.src} />
                            </button>
                          </a>
                        </div>
                    </div>
                  <hr class="border-t-2 border-hr-color w-12/14 mx-[15px]"/>
                  </div>
                    
                    <div class="flex items-center justify-center h-cover">
                      <div class="flex flex-col w-full min-h-[600px] my-2px bg-transparent text-white p-6 ">
                        <div class="flex flex-col flex-grow h-0 p-4 overflow-auto scrollbar">
                            
                        </div>
                      </div>
                    </div>
                    <form class="flex px-4 mb-4 customw absolute bottom-0">
                      <div>
                          {{{ DropDown ref="pin"}}}
                      </div>
                      <div class="w-full px-2">
                          {{{ MessageInput
                              placeholder="Write..." 
                              name="message" 
                              ref="messageRef"
                          }}}
                      </div>
                      <div class="ml-auto">
                          {{{ButtonConfirm 
                              class="rounded-full bg-blue w-[25px] h-[25px] text-bold"
                              btn="➜"
                              type="submit"
                              onSubmit=onSubmit}}}
                      </div>
                    </form>
                    {{else}}
                    <div  class="flex min-h-[600px] text-center">
                      <h3 class="m-auto">Create or Select Chat</h3>
                    </div>
                   {{/if}}
                </div>
            </main>`
    }
}

export default Dialog
