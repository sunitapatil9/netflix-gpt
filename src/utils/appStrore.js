import { configureStore } from "@reduxjs/toolkit";
import nowplayingReducer from "./nowplayingSlice";
import userSlice from "./userSlice";

const appStore = configureStore({
    reducer : {
        user : userSlice,
        movies : nowplayingReducer,
    }
})
export default appStore;