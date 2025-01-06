import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        user:{
            name: null,
            email: null,
            role: '',
            profile:null,
        }
        
    },
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setUser:(state,action)=>{
            state.user=action.payload
        },
        setUserProfile:(state,action)=>{
            state.user.profile = action.payload
        }

    }
});

export const { setIsLoggedIn,setUser,setUserProfile} = userSlice.actions;
export default userSlice.reducer;