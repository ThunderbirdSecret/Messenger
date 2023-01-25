import Block from "utils/Block";

interface ChatsListProps {
    avatar?: string;
    login: string;
    lastMessage: string;
    onClick?: ()=> void;
}

export class ChatsList extends Block {
    static cName = "ChatsList"
    constructor({onClick, ...props}:ChatsListProps){
        super({...props, events: {click: onClick}})
    }

    protected render(): string {
        return `
            <div>
                <hr class="border-t-2 border-hr-color w-12/14 mx-[15px]"/>
                <div class="flex items-center gap-x-3 p-2.5 h-[73px] hover:bg-select-graphite">
                    <div class="min-w-[47px] min-h-[47px] rounded-full bg-blue"></div>
                    <div class="text-sm">
                        <strong>{{login}}</strong>
                        <p class="max-w-[250px] truncate">{{lastMessage}}</p>
                    </div>
                </div>
            </div>`
    }
}
