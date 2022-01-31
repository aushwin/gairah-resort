import { createSlice } from "@reduxjs/toolkit";

export const GUESTVIEW = {
    register: 'register',
    edit: 'edit',
    visual: 'visual'
}

const initialState = {
    toggleView: GUESTVIEW.visual,
}

export const guestSlice = createSlice({
    name: 'guest',
    initialState,
    reducers: {
        toggleView : (state,action)=> {
            state.toggleView = action.payload
        },
         
    }
})

export const guestSliceActions = guestSlice.actions