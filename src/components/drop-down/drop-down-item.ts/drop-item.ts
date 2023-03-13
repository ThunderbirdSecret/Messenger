import Input from "components/input/input";
import Block from "utils/Block";
import template from "./drop-item.hbs"

interface DropItemProps {
    src?: any;
    title: string;
    uploadId: string;
    events?: { click: ()=> void }
}

export default class DropItem extends Block<DropItemProps> {
    constructor(props: DropItemProps){
        super(props)
    }

    init(){
        this.children.upload = new Input({
            class: "hidden",
            id: this.props.uploadId,
            type: "file",
            name: this.props.uploadId,
            accept: "image/*,video/*"
        })
    }
    
    render() {
        return this.compile(template, {...this.props})
    }
}
