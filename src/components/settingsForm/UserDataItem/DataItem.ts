import { Block } from "utils";

export interface DataItemProps {
    title: string;
    data: string;
    type: string;
  }
  
  export default class UserDataItem extends Block<DataItemProps> {
    static cName = "UserDataItem";
  
    render() {
      return `
          <div class="flex flex-wrap justify-between my-1 gap-x-52 w-[510px]">
            <div>
              <div class="text-start text-bold">{{title}}</div>
            </div>
            <div>
              <div class="text-end">{{data}}</div>
            <div>
          </div>
          `;
    }
  }
