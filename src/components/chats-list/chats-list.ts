import { withStore } from "helpers/HOCS/WithStore";
import controller from "services/ChatsController";
import { Block } from "utils";


interface ChatListProps {
  chats?: ChatType[];
  isLoaded?: boolean;
};
class ChatsList extends Block {
  static cName = "ChatsList";

  constructor(props: ChatListProps) {
    super({...props});

    // const data = 
    this.setProps({
      chats: controller.getChats()
    })
  }


  // protected componentDidUpdate(oldProps: ChatListProps, newProps: ChatListProps): boolean {
  //   this.children.chats = this.NewChat(newProps);

  //   return true;
  // }

    protected render(): string {
      console.log("CHATLIST", this)
        return `
        {{#if isLoaded}}
              {{#each chats}}
                {{#with}}
                  {{{ChatsItem title="{{title}}" lastMessage="{{last_message}}" id="{{id}}"}}}
                {{/with}}
              {{/each}}
        {{/if}}
            

            `
    }
}

const withChats = withStore((state) => ({chats: [...(state.chats || [])]}));

export default withChats(ChatsList);
