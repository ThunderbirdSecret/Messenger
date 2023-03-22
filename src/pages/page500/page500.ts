import { Link } from "components/navigate-button/navigate-button";
import Block from "utils/Block";
import template from "./page500.hbs"
import TitleComponent from "components/title-component/title-component";

export default class Page404 extends Block{

    constructor({}) {
        super({});
    }
    
    init() {
        this.children.title = new TitleComponent({
            title: "404"
        })
    
        this.children.link = new Link({
            path: "/messenger",
            title: "Go back"
        })
    }
    
        render() {
            return this.compile(template, {...this.props})
        }
    } 
