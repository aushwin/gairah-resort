import {Request , Response} from 'express'
import { Guest, IGuest } from '../models/guest.model'


export const fetchGuest = async(req:Request, res:Response) => {
    try {
        const response = await Guest.find()
        res.send(response);
    }catch(e){
        if(e instanceof Error) console.log(e.message)
        else console.log(e)
    }
}

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
            res.status(406).send(e.message)
        }
    }
}