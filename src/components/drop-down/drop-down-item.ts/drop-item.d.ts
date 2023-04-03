import Block from "utils/Block";
interface DropItemProps {
    src?: any;
    title: string;
    uploadId: string;
    events?: {
        click: () => void;
    };
}
export default class DropItem extends Block<DropItemProps> {
    constructor(props: DropItemProps);
    init(): void;
    render(): DocumentFragment;
}
export {};
