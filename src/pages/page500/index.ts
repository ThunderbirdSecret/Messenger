import renderDOM from "utils/renderDOM"
import { Page500 } from "./page500"
import registerComponent from "utils/registerComponent"
import { Title } from "components/title/title"
import { LinkPage } from "components/link-page/link-page";

registerComponent(Title);
registerComponent(LinkPage);
registerComponent(Page500);

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new Page500);
})
