import { appStylesSlice } from "./appStylesSlice";
import { AppThunk } from "../store";

export interface SetStylesPayload {
    theme: 'dark' | 'light';
}

const setStyles = (styles: SetStylesPayload): AppThunk => {
    return (dispatch) => {
        dispatch(appStylesSlice.actions.setAppStyles(styles));
    };
};

export const appStylesOp = {
    setStyles
};
