import { withStore } from "./WithStore";

export const withUser = withStore((state) => ({ ...state.user }))
