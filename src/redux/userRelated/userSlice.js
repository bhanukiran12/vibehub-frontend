import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
    
const initialState = {

    status: 'Idle',
    userName: null,
    error:null
}

const userSlice = createSlice({

    name: "user",
    initialState,
    reducers: {
        authRequest: state => {
            state.status = "Loading"
        },
        authSuccess: (state, action) => {
            state.status = "Success"
            state.userName = action.payload;
           Cookies.set("vibehub",action.payload)
        },
        authError: (state, action) => { 
            state.status = "Error"
            state.error =action.payload
            
        }

    }
}) 
export const { 
    authRequest,
    authSuccess,
    authError
} = userSlice.actions
export const userReducer=userSlice.reducer