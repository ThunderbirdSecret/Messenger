import { UserDataInput } from "components";
import { WithRouter } from "helpers/HOCS/WithRouter";
import { WithStore } from "helpers/HOCS/WithStore";
import { getChildInputRefs } from "helpers/getChildInputRefs";
import { getErrorsObject } from "helpers/getErrorsObject";
import { setChildErrorsProps } from "helpers/setChildErrorsProps";
import { ChangeSettingsProps } from "pages/changeData/ChangeData";
import { changeUserPassword } from "services/userData";
import { Block } from "utils";

type ChangePasswordRefs = Record<string, UserDataInput>;

class ChangePassword extends Block<ChangeSettingsProps, ChangePasswordRefs> {
  static cName: string = "ChangePassword";

  constructor(props: ChangeSettingsProps) {
    super({ ...props, events: { 
      submit: (event: SubmitEvent) => this.onSubmit(event) } });

      const { user } = this.props.store.getState();
      const { login, avatar } = user || {};

    this.setProps({
      userLogin: login,
      avatarSrc: avatar,
      navigateBack: () => this.props.router.go("/settings"),
    });
  }

  async onSubmit(event: SubmitEvent) {
    event.preventDefault();

    const refs = getChildInputRefs(this.refs);
    const errors = getErrorsObject(refs);

    if (Object.keys(errors).length) {
      setChildErrorsProps(errors, this.refs);

      return;
    }

    const { oldPassword, newPassword, repeatNewPassword } = refs;

    if (newPassword.value !== repeatNewPassword.value) {
      Object.values(this.refs).forEach((value) => {
        value.getRefs().ErrorRef!.setProps({ error: "Passwords do not match" });
      });

      return;
    }

    if (Object.keys(errors).length === 0) {
      const newData = { oldPassword: oldPassword.value, newPassword: newPassword.value };
      await changeUserPassword(newData);
    }
  }

  componentDidUpdate() {
    if (this.props.store.getState().currentRoutePathname !== "/changeUserPassword") {
      return false;
    }
    this.children = {};
    return true;
  }

  render() {
    console.log(this.refs)
    return `
        <main class="h-screen">
          {{{Loader}}}
          <div class="flex px-2">
          <div class="mr-auto my-auto flex-none border-none">
              {{{ArrowRoundButton onClick=navigateBack}}}
          </div>
          
          <section class="grow flex flex-col gap-y-2 justify-center items-center h-screen">
                        {{{Avatar name=userLogin imageSrc=avatarSrc isEditable=false}}}

                        <div class="">
                            {{{InputControlled placeholder="Old Password" ref="oldPassword" childRef="oldPassword" title="Enter old password" type="password" name="old_password"}}}
                            {{{InputControlled placeholder="New Password" ref="newPassword" childRef="newPassword" title="Enter new password" type="password" name="password"}}}
                            {{{InputControlled placeholder="Repeat Password" ref="repeatNewPassword" childRef="repeatNewPassword" title="Repeat new password" type="password" name="repeat_password"}}}
                        </div>

                        <div class="flex flex-col py-10">
                            {{{ButtonConfirm btn="Save changes" class="w-[180px] h-[37px] bg-gradient-b-button-color text-white text-xl rounded-lg" type="submit"}}}
                            {{{LinkPage linkTitle="Cancel" class="border-none bg-transparent py-4 text-sm text-blue" onClick=navigateBack type="button"}}}
                        </div>
                    </form>
                </section>
            </div>
        </main>
        `;
  }
}

export default WithRouter(WithStore(ChangePassword));
