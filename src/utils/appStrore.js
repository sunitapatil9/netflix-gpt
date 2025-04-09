import { configureStore } from "@reduxjs/toolkit";
import nowplayingReducer from "./nowplayingSlice";
import userSlice from "./userSlice";
import GptReducer from "./GptSlice";

const appStore = configureStore({
    reducer : {
        user : userSlice,
        movies : nowplayingReducer,
        gpt : GptReducer,
    }
})
export default appStore;