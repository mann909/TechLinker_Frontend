import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        name: null,
        email: null,
        role: null,
        profile:{}
    },
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    }
});

export const { setIsLoggedIn} = userSlice.actions;
export default userSlice.reducer;