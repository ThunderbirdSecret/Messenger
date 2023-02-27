import { SignupData, UserKeys } from "api/typesAPI";
import { UserDataInput } from "components";
import { WithRouter } from "helpers/HOCS/WithRouter";
import { WithStore } from "helpers/HOCS/WithStore";
import { getChildInputRefs } from "helpers/getChildInputRefs";
import { getErrorsObject } from "helpers/getErrorsObject";
import { getUserDataArray } from "helpers/getUserDataArray";
import { setChildErrorsProps } from "helpers/setChildErrorsProps";
import { transformRefsToUser } from "helpers/transformers/transformRefsToUser";
import { SettingsProps } from "pages/settings/settings";
import { changeUserProfile } from "services/userData";
import { Block } from "utils";
import { Store } from "utils/store/Store";

export type ChangeSettingsProps = SettingsProps & {
    userData: Array<any>;
    userLogin: string;
    avatarSrc: string;
    onSubmit: (event: SubmitEvent) => void;
    navigateBack: () => void;
    changeInput: () => void;
    store: Store<AppState>;
    events: Record<string, unknown>;
  };
  
  type ChangePasswordRefs = Record<string, UserDataInput>;
  
  class ChangeData extends Block<ChangeSettingsProps, ChangePasswordRefs> {
    static cName = "ChangeData";
  
    constructor(props: ChangeSettingsProps) {
      super({ ...props, events: { submit: (event: SubmitEvent) => this.onSubmit(event) } });
  
      const { user } = this.props.store.getState();
      const { login, avatar } = user || {};
  
      const data = user ? getUserDataArray(user) : [];
  
      this.setProps({
        userData: data,
        userLogin: login,
        avatarSrc: avatar,
  
        navigateBack: () => this.props.router.go("/settings"),
      });
    }
  
    async onSubmit(event: SubmitEvent) {
      event.preventDefault();
      const refs = getChildInputRefs(this.refs);
      const errors = getErrorsObject(refs);
  
      setChildErrorsProps(errors, this.refs);
  
      if (Object.keys(errors).length === 0) {
        const userDataValues = Object.entries(refs).reduce((acc, [key, input]) => {
          acc[key as UserKeys] = input.value;
          return acc;
        }, {} as Partial<SignupData>);
  
        const newData = transformRefsToUser(userDataValues);
  
        await changeUserProfile(newData);
      }
    }
  
    componentDidUpdate() {
      if (this.props.store.getState().currentRoutePathname !== "/changeData") {
        return false;
      }
      this.children = {};
      return true;
    }
  
    render() {
      console.log("change data: ", this)
      return `
          <main class="h-screen">
              {{{Loader}}}
    
              <div class="flex px-2">
                  <div class="mr-auto my-auto flex-none border-none">
                      {{{BackButton onClick=navigateBack}}}
                  </div>
                  
                  <section class="grow flex flex-col gap-y-2 justify-center items-center h-screen">
                      {{{Avatar name=userLogin imageSrc=avatarSrc isEditable=false}}}
  
                          <div class="user__data">
                            {{#each userData}}
                                {{#with this}}
                                    {{{UserDataInput ref=title childRef=title title=title data=data type=type inputName=title}}}
                                {{/with}}
                            {{/each}}
                          </div>
  
                          <div class="flex flex-col py-10">
                              {{{ButtonConfirm btn="Save changes" class="w-[180px] h-[37px] bg-gradient-b-button-color text-white text-xl rounded-lg my-4" type="submit"}}}
                              {{{LinkPage linkTitle="Cancel" class="border-none bg-transparent py-4 text-sm text-blue" onClick=navigateBack type="button"}}}
                          </div>
                  </section>
              </div>
          </main>
          `;
    }
  }
  
  export default WithRouter(WithStore(ChangeData));
  