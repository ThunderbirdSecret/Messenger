import Block from "utils/Block";

// interface OtherMessageProps {
//     // message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
//     // time: "20 min";
// }

export class OtherMessage extends Block {
    static cName = "OtherMessage"

    // constructor({...props}:OtherMessageProps) {
    //     super(props);
    // }

    protected render(): string {
        return `
        <div class="flex w-full mt-2 space-x-3 max-w-xs">
		    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-600"></div>
			<div>
				<div class="bg-select-graphite p-3 rounded-r-lg rounded-bl-lg">
					<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
                <span class="text-xs text-white leading-none">20 min ago</span>
            </div>
		</div>
        `
    }
}