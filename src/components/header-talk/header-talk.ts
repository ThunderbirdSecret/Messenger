import Block from "utils/Block";

const icon = new Image()
icon.src = require("asserts/threepoint.svg")

interface HeaderTalkProps {
    login: string;
    path: string;
    src: string;
}
//добавить пропсы для дроп дауна
export class HeaderTalk extends Block<HeaderTalkProps> {

    static cName = "HeaderTalk"

    constructor({...props}:HeaderTalkProps) {
        super({...props})
    }

    protected render(): string {
        return `
        <div>
            <div class="flex items-center gap-x-3 m-[13px]">
                <div class="min-w-[34px] min-h-[34px] rounded-full bg-blue"></div>
                <div>
                    <strong>{{login}}</strong>
                </div>
                <div class="ml-auto ">
                    <a href={{path}}>
                        <button class="px-4">
                            <img alt="icon" src=${icon.src} />
                        </button>
                    </a>
                </div>
            </div>
            <hr class="border-t-2 border-hr-color w-12/14 mx-[15px]"/>
        </div>
            `
    }
}

export default HeaderTalk;
