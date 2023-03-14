import Block from "utils/Block";
import template from "./loader.hbs"

type LoaderProps = {};

export class Loader extends Block<LoaderProps> {

    protected render() {

        return this.compile(template, {...this.props})
    }
}

export default Loader;
