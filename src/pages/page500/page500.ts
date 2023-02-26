import { Block } from "utils"

interface Page500Props {}
export class Page500 extends Block<Page500Props> {
    static cName = "Page500"
    protected render(): string {
        return `
            <main class="flex justify-center flex-col gap-5 items-center h-screen">
                {{{  Title title="Error 500" }}}
                <p>We are already fixing</p>
                {{{  LinkPage link="../dialog/dialog.html" linkTitle="Back to chats"}}}
            </main>

        `
    }
}
