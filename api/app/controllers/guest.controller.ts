import {Request , Response} from 'express'


export const addGuest = (req:Request,res:Response)=>{
    const {guestName,guestNumber,selectedRooms} = req.body.params
}