import renderDOM from "utils/renderDOM"
import { Registration } from "./registration"
import registerComponent from "utils/registerComponent";
import { Title } from "components/title/title";
import { InputControlled } from "components/input-controlled/input-controlled";
import { LinkPage } from "components/link-page/link-page";

registerComponent(Title);
registerComponent(InputControlled);
registerComponent(LinkPage);
registerComponent(Registration);

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new Registration());
})