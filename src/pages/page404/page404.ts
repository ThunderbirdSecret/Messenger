import { Block } from "utils";


export default class Page404 extends Block {
static cName = "Page404"

constructor({}) {
    super({});
}
    // componentDidUpdate() {
    //     return window.store.getState().screen === '404';
    // }

    protected render(): string {
        return `
            <main class="flex justify-center flex-col gap-5 items-center h-screen">
                {{{ Title title="404"}}}
                <p>You got lost.</p>
                {{{LinkPage linkTitle="Back to chats" to="/"}}}
            </main>
        `
    }
} 
