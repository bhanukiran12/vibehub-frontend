import axios from "axios";

import { postFailure, postRequest, postSuccess } from "./postSlice"; 

export const getPosts = token => async (dispatch) => { 
    dispatch(postRequest())
    console.log(token)
    try {
        const results = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/posts`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
        })
        console.log(results)
        const posts = results.data
        if (posts) { 
            dispatch(postSuccess(posts))
        }

    } catch { 
            dispatch(postFailure())
    }
}