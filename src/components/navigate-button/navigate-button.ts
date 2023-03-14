import withRouter, { PropsWithRouter } from "helpers/HOCS/WithRouter";
import Block from "utils/Block";
import template from "./navigate-button.hbs"

interface NavigateButtonProps extends PropsWithRouter {
    path: string;
    type?: string;
    class?: string;
    title: string;
    events?: {
        click: () => void;
      };
}

class NavigateButton extends Block<NavigateButtonProps> {
    constructor(props:NavigateButtonProps){
        super({...props, events: { 
          click: ()=> this.navigate()
          }});
    }

    navigate() {
      this.props.router.go(this.props.path);
    }

    render() {
        return this.compile(template, { ...this.props });
      }
}

export const Link = withRouter(NavigateButton);
