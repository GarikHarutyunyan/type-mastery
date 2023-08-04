import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { appStylesSlice, AppState } from "./app/appStylesSlice";

export interface RootState {
    appStyles: AppState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;

export const store = configureStore({
    reducer: {
        appStyles: appStylesSlice.reducer
    },
});
