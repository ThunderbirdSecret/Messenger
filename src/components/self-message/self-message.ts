import Block from "utils/Block";

interface SelfMessagesProps {
    message?: string;
    time?: string;
}


export class SelfMessage extends Block<SelfMessagesProps> {
    
    static cName="SelfMessage"

    constructor({...props}:SelfMessagesProps) {
        super(props)
    }

    protected render(): string {
        return `
        <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end" id="my_message">
            <div>
                <div class="bg-select-graphite text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">{{message}}</p>
                </div>
                <span class="text-xs text-white leading-none">{{time}}</span>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div>
        `
    }
}
