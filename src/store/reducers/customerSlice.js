import { createSlice } from "@reduxjs/toolkit";

export const CUSTOMERVIEW = {
    register: 'register',
    edit: 'edit',
    visual: 'visual'
}

const initialState = {
    toggleView: CUSTOMERVIEW.visual,
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        toggleView : (state,action)=> {
            state.toggleView = action.payload
        }
    }
})

export const customerSliceActions = customerSlice.actions