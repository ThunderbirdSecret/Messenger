import Block from "utils/Block";

export class Dialog extends Block {
    static cName = "Dialog"
    constructor() {
        super()
    }

    protected render(): string {
        return `
            <main class="h-[760px] w-cover flex flex-row overflow-hidden text-base">
                <div class="basis-1/4 bg-graphite h-screen">
                    {{{ HeaderListDialog }}}
                    <article class="h-[665px] p-4 overflow-auto scrollbar">
                        {{{ ChatsList }}}
                        {{{ ChatsList }}}
                        {{{ ChatsList }}}
                    </article>
                </div>
                <div class="basis-3/4 bg-transparent">
                    {{{ HeaderTalk 
                            path="./" 
                            login="Solgar" 
                    }}}
                    <div class="flex items-center justify-center min-h-[665px]">
                        {{!-- <p>Select chat to change a message</p> --}}
                        {{{ ListDialog }}}
                    </div>
                    <form class="flex px-4 mb-4">
                        <div>
                            {{{DropDown}}}
                        </div>
                        <div class="w-full px-2">
                            {{{ MessageInput
                                placeholder="Write..." 
                                name="message" 
                            }}}
                        </div>
                        <div class="ml-auto">
                            <a href="./" class="rounded-full bg-blue">
                                <svg class="w-6 h-6" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="14" cy="14" r="14" fill="#3390FC"/>
                                    <rect x="8" y="13.2" width="11" height="1.6" fill="white"/>
                                    <path d="M15 9L19 14L15 19" stroke="white" stroke-width="1.6"/>
                                </svg>
                            </a>
                        </div>
                    </form>
                </div>
            </main>`
    }
}