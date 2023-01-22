import renderDOM from "utils/renderDOM"
import { Settings } from "./settings"
import registerComponent from "utils/registerComponent"
import { BackButton } from "components/back-button/back-button"
import { Avatar } from "components/avatar/avatar"
import { SettingInput } from "components/settings-input/settings-input"
import { LinkPage } from "components/link-page/link-page"
import { Input } from "components/input/input"
import { ErrorComponent } from "components/error-component/error-component"
import { ButtonConfirm } from "components/button-confirm/button-confirm"

registerComponent(BackButton)
registerComponent(Avatar)
registerComponent(SettingInput)
registerComponent(LinkPage)
registerComponent(Input)
registerComponent(Settings)
registerComponent(ErrorComponent)
registerComponent(ButtonConfirm)

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new Settings())
})