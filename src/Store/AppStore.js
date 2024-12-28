import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user.slice";
import loaderSlice from "./loader.slice";

const AppStore = configureStore({
    reducer:{
        user:userSlice,
        loader:loaderSlice
    }
})

export default AppStore;