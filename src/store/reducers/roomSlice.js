import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notificationSliceActions } from "./notificationSlice";


// Async Thunks
export const fetchAllRooms = createAsyncThunk(
    'rooms/fetchRooms',
    async (thunkAPI) => {
        const response = await axios.get('api/rooms/')
        return response.data
    }
)

export const editRoom = createAsyncThunk(
    'rooms/editRoom',
    async ({roomId,roomName,roomPrice},thunkAPI) => {
        console.log(roomId,roomName,roomPrice, 'from asnc thunk')
        const body = {
            "roomName" : roomName,
            "roomPrice" : roomPrice
        }
      try {
        const response = await axios.post(`api/rooms/edit/${roomId}`,
        body)
        thunkAPI.dispatch(notificationSliceActions.isSuccess('Updated Succesfully'))
         setTimeout(()=>thunkAPI.dispatch(notificationSliceActions.reset()),4000)
        return response.data; 
      }catch(e){
         thunkAPI.dispatch(notificationSliceActions.warning('Please try again'))
         setTimeout(()=>thunkAPI.dispatch(notificationSliceActions.reset()),4000)
         throw Error('Please try again')
      }
    }
)



const initialState = {
    rooms: [],
    roomDetails: {}

}

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        getRoomDetails: (state,action)=>{
             const rooms = state.rooms
             const room = rooms.find((room)=>room.roomId===action.payload)
             state.roomDetails = room 
            },
        updateRoom: (state,action)=>{
             const roomUpdate =  state.rooms.find((room)=>room.roomId === state.roomDetails.roomId)
             roomUpdate.roomName = action.payload.roomName
             roomUpdate.roomPrice = action.payload.roomPrice
             state.roomDetails = {}
        }
    },
    extraReducers: {
        [fetchAllRooms.fulfilled] : (state,action)=>{
            state.rooms = action.payload
        },

       [editRoom.fulfilled] : (state,action)=>{
            const roomUpdate =  state.rooms.find((room)=>room.roomId === state.roomDetails.roomId)
            roomUpdate.roomName = action.payload.roomName
            roomUpdate.roomPrice = action.payload.roomPrice
            state.roomDetails = {}
        },

        [editRoom.rejected] : (state,action) => {
            state.roomDetails = {}
        }
    }

})


export const roomsSliceActions = roomsSlice.actions