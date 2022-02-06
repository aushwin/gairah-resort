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

export const editGuest = createAsyncThunk(
    'guest/editGuest',
    async(guest,thunkAPI) => {
        try{
            console.log(guest,'from async thunk')
            const response = await axios.post('api/guests/edit',guest)
            thunkAPI.dispatch(notificationSliceActions.isSuccess('Guest Updated'))
            setTimeout(()=>thunkAPI.dispatch(notificationSliceActions.reset()),5000) 
            return response.data
        }catch(e){
            thunkAPI.dispatch(notificationSliceActions.isSuccess('Guest with same number exists'))
            setTimeout(()=>thunkAPI.dispatch(notificationSliceActions.reset()),5000) 
            throw new Error('Number not Unqiue')
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
        },
        getGuestEdit: (state,action) => {
            const guests = state.guests
            const guest = guests.filter((guest)=>guest.guestNumber===action.payload)
            state.toEdit = guest[0]
            state.toggleView = GUESTVIEW.edit
        }
         
    },
    extraReducers: {
        [fetchGuests.fulfilled] : (state,action)=>{
            state.guests = action.payload
        },
        [addGuest.fulfilled]: (state,action)=>{
          
        },
        [editGuest.fulfilled]: (state,action)=>{
            state.toEdit = {}
            state.toggleView = GUESTVIEW.visual
        }
        
    }
})



export const guestSliceActions = guestSlice.actions