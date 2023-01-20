import Block from "utils/Block";

interface TitleProps {
    title: string;
}

export class Title extends Block {

    static cName="Title"
    
    constructor({title}:TitleProps){
        super({title})
    }

    render() {
        return `
        <div class="text-4xl text-center my-4">
            <h1>{{title}}</h1>
        </div>
        `   
    }
    
}