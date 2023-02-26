import Block from "utils/Block";

interface ListDialogProps{
    emptyTitle?: string;
}
export class ListDialog extends Block<ListDialogProps>{
    
    static cName = "ListDialog"

    protected render(): string {
        return `
        <main class="flex flex-col w-full min-h-[600px] my-2px bg-transparent text-white p-6 ">
		    <div class="flex flex-col flex-grow h-0 p-4 overflow-auto scrollbar">
                {{{ OtherMessage 
                    message="Я сегодня упал лицом в снег"
                    time="12"}}}
                {{{ SelfMessage 
                    message="Зачем?"
                    time="12"}}}
                {{{ OtherMessage 
                    message="Чтобы снег попробовать"
                    time="11"}}}
                {{{ SelfMessage
                    message="Фу, там же собачьи сачки"
                    time="8"
                }}}
                {{{ OtherMessage 
                    message="Желтый снег самый вкусный"
                    time="5"}}}
		    </div>
        </main>
        `
    }
}


export default ListDialog;
