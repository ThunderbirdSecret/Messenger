import Block from "utils/Block";
import template from "./data-item.hbs"

export interface DataItemProps {
    name: string;
    value?: string | number;
}
export default class DataItem extends Block {
  constructor(props:DataItemProps){
    super(props)
  }
  render() {
    return this.compile(template, {...this.props})
  }
}
