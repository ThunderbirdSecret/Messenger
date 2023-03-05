import { Block } from "utils";

interface LinkCreateChatProps {
    events:{
        click: () => void;
    }
}

export default class LinkCreateChat extends Block {
    static cName = "LinkCreateChat"
    constructor(props: LinkCreateChatProps){
        super({props, events: {
            click: () => this.toggleCreateChatForm()
        }})
    }

    toggleCreateChatForm()  {
        console.log("Window with create chat")
        return document.querySelector('#createChat')?.classList.remove("hidden");
      }

    protected render(): string {
        return `
        {{{LinkPage linkTitle="Create Chat ✚"}}}
        `
    }
}
