import Block from "utils/Block";

export class ListDialog extends Block{
    
    static cName = "ListDialog"

    protected render(): string {
        return `
        <main class="flex flex-col w-full min-h-[600px] my-2px bg-transparent text-white p-6 ">
		    <div class="flex flex-col flex-grow h-0 p-4 overflow-auto scrollbar">
                {{{ OtherMessage }}}
                {{{ SelfMessage }}}
                {{{ SelfMessage }}}
                {{{ SelfMessage }}}
                {{{ OtherMessage }}}
		    </div>
        </main>
        `
    }
}