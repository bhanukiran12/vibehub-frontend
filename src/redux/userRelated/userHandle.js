import axios from "axios";
import { authRequest, authSuccess,authError } from "./userSlice";

export const loginUser = fields => async (dispatch) => { 
    dispatch(authRequest())

    try {
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, fields, {
            headers: {'Content-Type':'application/json'}
        })
       
       
        const token = result.data.token
        console.log(token)
        if (token) { 
            console.log(token)
            dispatch(authSuccess(token))
            console.log('sucesss')
        }

    } catch (error) { 
        dispatch(authError(error.response?.message))
    }
}