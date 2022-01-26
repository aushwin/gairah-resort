import { createSlice,current } from "@reduxjs/toolkit";

const initialState = {
    rooms: [
        {roomId: 'FBC1',roomName: 'Full Bamboo Cottage 1',roomPrice:499,active:false},
        {roomId: 'FBC2',roomName: 'Full Bamboo Cottage 2',roomPrice:599,active:true},
        {roomId: 'HBC1',roomName: 'Half Bamboo Cottage 1',roomPrice:399,active:false},
        {roomId: 'HBC2',roomName: 'Half Bamboo Cottage 2',roomPrice:299,active:false},
        {roomId: 'HBC3',roomName: 'Half Bamboo Cottage 3',roomPrice:299,active:false},
        {roomId: 'HBC4',roomName: 'Half Bamboo Cottage 4',roomPrice:699,active:false},
        {roomId: 'HBC5',roomName: 'Half Bamboo Cottage 5',roomPrice:799,active:false},
        {roomId: 'HBC6',roomName: 'Half Bamboo Cottage 6',roomPrice:899,active:false}
    ],
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
    }
})

export const roomsSliceActions = roomsSlice.actions