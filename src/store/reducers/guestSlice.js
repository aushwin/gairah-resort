import { createSlice } from "@reduxjs/toolkit";

export const GUESTVIEW = {
    register: 'register',
    edit: 'edit',
    visual: 'visual'
}

const initialState = {
    toggleView: GUESTVIEW.visual,
    guests: []
}

export const guestSlice = createSlice({
    name: 'guest',
    initialState,
    reducers: {
        toggleView : (state,action)=> {
            state.toggleView = action.payload
        },
        guestRegistration: (state,action) => {
           const user = action.payload
           //TODO : Update in db
           state.guests.push(user)
        } 
         
    }
})

export const guestSliceActions = guestSlice.actions