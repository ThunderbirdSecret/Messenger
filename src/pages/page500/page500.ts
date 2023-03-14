import { Link } from "components/navigate-button/navigate-button";
import Title from "components/title/title";
import Block from "utils/Block";
import template from "./page500.hbs"

export default class Page404 extends Block{

    constructor({}) {
        super({});
    }
    
    init() {
        this.children.title = new Title({
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
