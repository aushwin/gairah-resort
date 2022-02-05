import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

export const GUESTVIEW = {
    register: 'register',
    edit: 'edit',
    visual: 'visual'
}

const initialState = {
    toggleView: GUESTVIEW.visual,
    guests: [],
    toEdit: {}
}

export const fetchGuests = createAsyncThunk(
    'guest/fetchGuests',
    async()=>{
        const response = await axios.get('api/guests')
        return response.data
    }
)


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
         
    },
    extraReducers: {
        [fetchGuests.fulfilled] : (state,action)=>{
            state.guests = action.payload
        }
    }
})



export const guestSliceActions = guestSlice.actions