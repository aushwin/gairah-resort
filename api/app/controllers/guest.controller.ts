import {Request , Response} from 'express'
import { Guest, IGuest } from '../models/guest.model'




export const addGuest =async (req:Request,res:Response)=>{
    const guestData: IGuest = req.body
    
    const guest = new Guest({
        guestName: guestData.guestName,
        guestNumber: guestData.guestNumber,
        selectedRooms: guestData.selectedRooms,
        foodBill: []
    })
    try {
       const response = await guest.addGuest()
        res.send(response)
    }catch(e:unknown){
        if(e instanceof Error){
            res.send(e.message)
        }
    }
}