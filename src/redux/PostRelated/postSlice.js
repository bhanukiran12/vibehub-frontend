import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    status:'Idle'
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postRequest: state => { 
            state.status="Loading"
        },
        postSuccess: (state, action) => { 
            state.status = 'Success'
            state.posts=action.payload
        },
        postFailure: state => { 
            state.status="Error"
        }
    }

})

export const { 
    postRequest,postSuccess,postFailure
} = postSlice.actions

export const postReducer=postSlice.reducer