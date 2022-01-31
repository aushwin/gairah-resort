import { createSlice } from "@reduxjs/toolkit";

export const COLORS = {
    error : 'error',
    success : 'success',
    warning : 'warning'
}

const initialState = {
    message : '',
    color : ''
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        isSuccess: (state,action)=>  {
            state.color = COLORS.success
            state.message = action.payload
        },
        reset: (state) => {
            state.color = ''
            state.message = ' '
        },
        warning: (state,action) => {
            state.color = COLORS.warning 
            state.message = action.payload
        }
    }
})

export const notificationSliceActions = notificationSlice.actions