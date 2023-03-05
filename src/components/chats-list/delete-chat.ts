import controller from "services/ChatsController";
import { Block } from "utils";

interface DeleteChatProps {
    events?: {
        id: string;
        chat?: ChatType;
        click: () => void
    }
}

export default class DeleteChat extends Block {
    static cName = "DeleteChat"
    constructor(props: DeleteChatProps){
        super({props, events: {
            click: () => this.delete()
        }})
    }

    async delete() {
        await controller.delete(this.props.chat.id)
    }

    protected render(): string {
        console.log("попробовать получить родительский пропс", this)
        return `
            {{{LinkPage linkTitle="x"}}}
        `
    }
}

// const withChats = withStore((state) => ({chats: [...(state.chats || [])]}));

// export default withChats(DeleteChat);
