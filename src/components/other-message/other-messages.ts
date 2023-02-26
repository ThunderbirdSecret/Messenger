import Block from "utils/Block";

interface OtherMessageProps {
    message?: string;
    time?: string;
}

export class OtherMessage extends Block<OtherMessageProps> {
    static cName = "OtherMessage"

    constructor({...props}:OtherMessageProps) {
        super(props);
    }

    protected render(): string {
        return `
        <div class="flex w-full mt-2 space-x-3 max-w-xs" id="someone_message">
		    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-600"></div>
			<div>
				<div class="bg-select-graphite p-3 rounded-r-lg rounded-bl-lg">
					<p class="text-sm">{{message}}</p>
				</div>
                <span class="text-xs text-white leading-none">{{time}}</span>
            </div>
		</div>
        `
    }
}

export default OtherMessage;
