import { DropDown } from "components/drop-down/drop-down";
import { HeaderListDialog } from "components/header-list-dialog/header-list-dialog";
import { HeaderTalk } from "components/header-talk/header-talk";
import { ListDialog } from "components/list-dialog/list-dialog";
import { MessageInput } from "components/message-input/message-input";
import registerComponent from "utils/registerComponent";
import { Dialog } from "./dialog";
import renderDOM from "utils/renderDOM";
import { OtherMessage } from "components/other-message/other-messages";
import { SelfMessage } from "components/self-message/self-message";
import { ChatsList } from "components/chats-list/chats-list";

registerComponent(HeaderListDialog)
registerComponent(HeaderTalk)
registerComponent(ListDialog)
registerComponent(DropDown)
registerComponent(MessageInput)
registerComponent(Dialog)
registerComponent(SelfMessage)
registerComponent(OtherMessage)
registerComponent(ChatsList)

document.addEventListener('DOMContentLoaded', () => {
    renderDOM(new Dialog());
  });
