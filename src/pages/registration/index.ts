import renderDOM from "utils/renderDOM"
import { Registration } from "./registration"
import registerComponent from "utils/registerComponent";
import { Title } from "components/title/title";
import { InputControlled } from "components/input-controlled/input-controlled";
import { LinkPage } from "components/link-page/link-page";
import { Input } from "components/input/input";
import { ErrorComponent } from "components/error-component/error-component";
import { ButtonConfirm } from "components/button-confirm/button-confirm";

registerComponent(Title);
registerComponent(InputControlled);
registerComponent(LinkPage);
registerComponent(Registration);
registerComponent(Input);
registerComponent(ErrorComponent);
registerComponent(ButtonConfirm);

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new Registration());
})