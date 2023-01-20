import renderDOM from "utils/renderDOM"
import { Settings } from "./settings"
import registerComponent from "utils/registerComponent"
import { BackButton } from "components/back-button/back-button"
import { Avatar } from "components/avatar/avatar"
import { SettingInput } from "components/settings-input/settings-input"
import { LinkPage } from "components/link-page/link-page"

registerComponent(BackButton)
registerComponent(Avatar)
registerComponent(SettingInput)
registerComponent(LinkPage)

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new Settings())
})