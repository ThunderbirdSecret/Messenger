import Block from "utils/Block";

export class EditPassword extends Block {
    protected render(): string {
        return `
            <main class="h-screen flex px-2">
                <div class="mr-auto my-auto flex-none">
                    {{{ BackButton src="asserts/arrow-left.svg" }}}
                </div>
                <article class="grow flex flex-col gap-y-2 justify-center items-center h-screen">
                        {{{ Avatar src="asserts/sd.png" }}}
                        {{#each putData}}
                            <div class="py-2.5">
                                {{{ Input }}}
                            </div>
                        {{/each}}
                    <div>
                        {{ ButtonConfirm btn="Save" path="pages/settings/settings.html"}}
                    </div>
                </article>
            </main>
`
    }
}