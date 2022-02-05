import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
import { notificationSliceActions } from "./notificationSlice";

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

export const addGuest = createAsyncThunk(
    'guest/addGuest',
    async(guest,thunkAPI)=>{
        
        try{
            const response = await axios.post('api/guests',guest)
            thunkAPI.dispatch(notificationSliceActions.isSuccess('Guest Registerd Successfully !'))
            setTimeout(()=>thunkAPI.dispatch(notificationSliceActions.reset()),3000)
            thunkAPI.dispatch(guestSliceActions.toggleView(GUESTVIEW.visual))
        return response.data}catch(e){
            thunkAPI.dispatch(notificationSliceActions.warning('Number already registered'))
            setTimeout(()=>thunkAPI.dispatch(notificationSliceActions.reset()),5000)      
            throw new Error('Number already registered')      
        }
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
        },
        [addGuest.fulfilled]: (state,action)=>{
          
        }
        
    }
})



export const guestSliceActions = guestSlice.actions