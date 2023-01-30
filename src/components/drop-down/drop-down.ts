import Block from "utils/Block";

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
    static cName = "DropDown"

    constructor() {
        super({});
    } 

    protected render(): string {

        return `
        <form onSubmit={{onSubmit}}>
            <div>
                <a class="" href="#" id="dropdown_button" onClick={{onClick}}>
                    <svg class="w-8 h-8 fill-current text-light-select hover:text-blue" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18661 12.5L13.7628 4.92389L14.7056 5.8667L7.12942 13.4428L6.18661 12.5Z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70067 15.0141L16.2768 7.43793L17.2196 8.38074L9.64348 15.9569L8.70067 15.0141Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0433 20.3567L21.6195 12.7806L22.5623 13.7234L14.9861 21.2995L14.0433 20.3567Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5574 22.8708L24.1335 15.2946L25.0763 16.2374L17.5002 23.8136L16.5574 22.8708Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5574 22.8709C13.9423 25.486 9.7118 25.4954 7.10831 22.8919C4.50481 20.2884 4.51423 16.0579 7.12935 13.4428L6.18654 12.5C3.0484 15.6381 3.03709 20.7148 6.16129 23.839C9.28548 26.9632 14.3621 26.9518 17.5003 23.8137L16.5574 22.8709Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6195 12.7806L22.5623 13.7234C25.003 11.2826 25.0118 7.3341 22.5819 4.90417C20.152 2.47424 16.2035 2.48303 13.7627 4.92381L14.7055 5.86662C16.6233 3.94887 19.7257 3.94196 21.6349 5.85119C23.5441 7.76042 23.5372 10.8628 21.6195 12.7806Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70092 15.0144C6.9575 16.7578 6.95122 19.5782 8.68689 21.3138C10.4225 23.0495 13.2429 23.0432 14.9863 21.2998L14.0435 20.357C12.8231 21.5774 10.8489 21.5818 9.6339 20.3668C8.41894 19.1518 8.42334 17.1776 9.64373 15.9572L8.70092 15.0144Z" />
                    </svg>
                </a>
                <div id="dropdown" class="z-10 hidden bg-select-graphite hover:divide-y-8 rounded-lg shadow w-44">
                    <ul class="py-1 text-sm text-white" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <div class="block px-4 py-2 hover:bg-light-select gap-x-2">
                                <label for="media" class="flex">
                                    <img src=${icon.union.src} alt="icon" class="pr-2"/>
                                    <p>Photo or video</p>
                                </label>
                                <input class="hidden" id="media" type="file" name="media accept="image/*,video/*" >
                            </div>
                        </li>
                        <li>
                            <div class="block px-4 py-2 hover:bg-light-select gap-x-2">
                                <label for="file" class="flex">
                                    <img src=${icon.file.src} alt="icon" class="pr-2"/>
                                    <p>File</p>
                                </label>
                                <input id="file" class="hidden" type="file" name="media accept="image/*,video/*" >
                            </div>
                        </li>
                        <li>
                            <div class="block px-4 py-2 hover:bg-light-select gap-x-2">
                                <a href="#" class="flex ">
                                <img src=${icon.location.src} alt=""icon" class="pr-2"/>
                                <p>Location</p>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </form>

        `
    }
}
