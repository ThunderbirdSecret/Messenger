import Block from "utils/Block";
import template from "./drop-down.hbs"
import DropItem from "./drop-down-item.ts/drop-item";

const icon = {
    union: new Image(),
    file: new Image(),
    location: new Image()
}
 icon.union.src = require("asserts/icon/Union.png")
 icon.file.src = require("asserts/icon/file.png")
 icon.location.src = require("asserts/icon/location.png")


//TODO: добавление и загрузка медиа в сообщение

export class DropDown extends Block {

    constructor() {
        super({});
    } 

    init(){ 
        
        this.children.photo = new DropItem({
            src: icon.union.src,
            title: "Photo or video",
            uploadId: "photo",

        })

        this.children.file = new DropItem({
            src: icon.file.src,
            title: "file",
            uploadId: "file",

        })

        this.children.location = new DropItem({
            src: icon.location.src,
            title: "location",
            uploadId: "location",
        })
    }

    render() {
        return this.compile(template, {...this.props})
    }
}

export default DropDown;
