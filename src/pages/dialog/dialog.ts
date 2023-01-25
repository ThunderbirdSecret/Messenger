import { SubmitBtn } from "helpers/submit";
import Block from "utils/Block";

const icon = new Image;
icon.src = require("../../asserts/icon/union.png")
export class Dialog extends Block {
    static cName = "Dialog"
    constructor() {
        super()

        this.setProps({
            login: "Вася",
            onSubmit: (e: Event) => {
                SubmitBtn(e, "dialog", this.refs)
            }
        })
    }

    protected render(): string {
        return `
            <main class="h-[760px] w-cover flex flex-row overflow-hidden">
                <div class="basis-1/4 bg-graphite h-screen">
                    {{{ HeaderListDialog }}}
                    <article class="h-[665px] p-4 overflow-auto scrollbar">
                        {{{ ChatsList login="Вася" lastMessage="Желтый снег самый вкусный"  }}}
                        {{{ ChatsList login="Федя" lastMessage="Гулял прошлой ночью, а у двери подъезда спал бомж"  }}}
                        {{{ ChatsList login="Баба Марина" lastMessage="Жизнь нынче сложной стала"  }}}
                        {{{ ChatsList login="Джареж Летоы" lastMessage="Все идет по плану"  }}}
                        {{{ ChatsList login="mr.Frost" lastMessage="Никак вы лять не научитесь!" }}}
                    </article>
                </div>
                <div class="basis-3/4 bg-transparent">
                    {{{ HeaderTalk 
                            path="#" 
                            login=login 
                            ref="headerTalk"
                    }}}
                    <div class="flex items-center justify-center min-h-[665px]">
                        {{!-- <p>Select chat to change a message</p> --}}
                        {{{ ListDialog ref="listMessage"}}}
                    </div>
                    <form class="flex px-4 mb-4">
                        <div>
                            {{{ DropDown ref="pin"}}}
                        </div>
                        <div class="w-full px-2">
                            {{{ MessageInput
                                placeholder="Write..." 
                                name="message" 
                                ref="messageInput"
                            }}}
                        </div>
                        <div class="ml-auto">
                            {{{ButtonConfirm 
                                class="rounded-full bg-blue w-[25px] h-[25px] text-bold"
                                btn="➜"
                                onSubmit=onSubmit}}}
                        </div>
                    </form>
                </div>
            </main>`
    }
}
