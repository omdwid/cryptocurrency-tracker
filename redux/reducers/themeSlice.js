import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "",
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            if (action.payload === "dark") {
                state.theme = "light";
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
                document.documentElement.classList.add("light");
            } else if (action.payload === "light") {
                state.theme = "dark";
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
                document.documentElement.classList.remove("light");
            }
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
