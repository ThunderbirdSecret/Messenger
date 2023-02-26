import { WithRouter } from "helpers/HOCS/WithRouter";
import { Block } from "utils";
import Router from "utils/Router";
import { Store } from "utils/store/Store";

interface Page404Props {
    router: Router;
    store: Store<AppState>;
    // formError?: () => string | null;
}
export class Page404 extends Block<Page404Props> {
static cName = "Page404"

constructor({...props}:Page404Props) {
    super({...props});
}
    // componentDidUpdate() {
    //     return window.store.getState().screen === '404';
    // }

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

export default WithRouter(Page404)
