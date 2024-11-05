import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userRelated/userSlice";
import { postReducer } from "./PostRelated/postSlice";

const store = configureStore({
    reducer: {
        user: userReducer, 
        posts:postReducer
    }
})

export default store