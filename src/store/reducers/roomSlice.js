import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
    extraReducers: (builder)=>{
        builder.addCase(fetchAllRooms.fulfilled,(state,action)=>{
            state.rooms = action.payload
        })
    }

})

// Async Thunks
export const fetchAllRooms = createAsyncThunk(
    'rooms/fetchRooms',
    async (thunkAPI) => {
        const response = await axios.get('api/rooms/')
        return response.data
    }
)

export const roomsSliceActions = roomsSlice.actions