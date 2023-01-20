import Block from "utils/Block";

export class Page404 extends Block {

    static cName = "Page404"

    protected render(): string {
        return `
            <main class="flex justify-center flex-col gap-5 items-center h-screen">
                {{{ Title title="404"}}}
                <p>You got lost.</p>
                {{{LinkPage link="../dialog/dialog.html" linkTitle="Back to chats"}}}
            </main>
        `
    }
} 