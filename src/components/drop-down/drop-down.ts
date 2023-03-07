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


//описать событие открытия drop down и передать туда компоненты

export class DropDown extends Block {

    constructor() {
        super({});
    } 

    init(){ 
        
        this.children.photo = new DropItem({
            src: icon.union.src,
            title: "Photo or video",
            uploadId: "photo",
            events: {
                click: ()=> this.uploadPhoto()
            }
        })

        this.children.file = new DropItem({
            src: icon.file.src,
            title: "file",
            uploadId: "file",
            events: {
                click: ()=> this.uploadPhoto()
            }
        })

        this.children.location = new DropItem({
            src: icon.location.src,
            title: "location",
            uploadId: "location",
        })
    }

    uploadPhoto(){
        console.log("загрузка фото")
    }
    render() {
        return this.compile(template, {...this.props})
    }
}

export default DropDown;
