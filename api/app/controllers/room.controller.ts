import { Request, Response } from "express"
import { Room } from "../models/room.model"
export const addRooms = async(req:Request,res:Response)=>{
    
   const {roomId,roomName,roomPrice,roomStatus} = req.body
   console.log(roomId,roomName,roomPrice,roomStatus)
    
   const room = new Room({
        roomId,
        roomName,
        roomPrice,
        roomStatus
    })

    try{
        const savedRoomDoc = await room.save()
        console.log(savedRoomDoc)
    }catch(e){
        console.log(e)
    }
}