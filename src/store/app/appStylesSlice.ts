import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Styles {
    theme: 'dark' | 'light';
    // Add other style properties here if needed
}

export interface AppState {
    state: any[]; // Replace 'any' with the appropriate type for your state
    styles: Styles;
}

export interface SetStylesPayload {
    theme: 'dark' | 'light';
    // Add other style properties here if needed
}

const initialState: AppState = {
    state: [],
    styles: {
        theme: 'dark'
    }
};

export const appStylesSlice = createSlice({
    name: 'appStyles',
    initialState,
    reducers: {
        setAppStyles: (state, action: PayloadAction<SetStylesPayload>) => {
            state.styles = action.payload;
        },
        initState: (state, action) => {
            state.state = action.payload;
        },
    },
});
