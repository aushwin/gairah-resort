import { Request, Response } from "express";
import { Room, IRoom } from "../models/room.model";

export const addRooms = async (req: Request, res: Response) => {
  const { roomId, roomName, roomPrice, roomStatus }: IRoom = req.body;
  const room = new Room({roomId,roomName,roomPrice,roomStatus});

    try {
       const savedRoom = await room.roomSave();
       res.send(savedRoom)
    }catch(e:unknown){
        if(e instanceof Error) {
            res.status(406).json({'message':e.message})
        }
    }

};

export const getRooms = async (req:Request , res: Response) => {
    const rooms = await Room.find({})
    res.send(rooms)
}
