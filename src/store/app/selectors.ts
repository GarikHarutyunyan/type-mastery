import { RootState } from "../store";
import { AppState } from "./appStylesSlice";

const getStyles = (state: RootState): AppState['styles'] => state.appStyles.styles;

export const appStylesSel = {
    getStyles
};
