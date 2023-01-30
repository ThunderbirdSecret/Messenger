import registerComponent from "utils/registerComponent";
import renderDOM from "utils/renderDOM";
import { Page404 } from "./page404";
import { Title } from "components/title/title";
import { LinkPage } from "components/link-page/link-page";

registerComponent(Page404);
registerComponent(Title);
registerComponent(LinkPage);

document.addEventListener('DOMContentLoaded', () => {
    renderDOM(new Page404());
  });
