import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "",
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            console.log(
                "Toggle theme is called using the payload: ",
                action.payload
            );

            if (action.payload === "dark") {
                state.theme = "light";
            } else if (action.payload === "light") {
                state.theme = "dark";
            }
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
