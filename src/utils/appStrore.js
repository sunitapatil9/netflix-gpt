import { configureStore } from "@reduxjs/toolkit";
import nowplayingReducer from "./nowplayingSlice";
import userSlice from "./userSlice";

const appStore = configureStore({
    reducer : {
        user : userSlice,
        nowplaymovie : nowplayingReducer,
    }
})
export default appStore;