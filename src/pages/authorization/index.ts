import registerComponent from "utils/registerComponent";
import { Authorization } from "./authorization";
import { LinkPage } from "components/link-page/link-page";
import { Input } from "components/input/input";
import renderDOM from "utils/renderDOM";
import { Title } from "components/title/title";
import { InputControlled } from "components/input-controlled/input-controlled";
import { ErrorComponent } from "components/error-component/error-component";
import { ButtonConfirm } from "components/button-confirm/button-confirm";

registerComponent(Input);
registerComponent(Title);
registerComponent(InputControlled);
registerComponent(ErrorComponent);
registerComponent(ButtonConfirm);
registerComponent(LinkPage);
registerComponent(Authorization);

document.addEventListener('DOMContentLoaded', () => {
    renderDOM(new Authorization());
  });
