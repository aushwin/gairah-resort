import { Schema, model, Model, Document, Error } from "mongoose";

export interface IRoom {
  roomId: String;
  roomName: String;
  roomPrice: number;
  roomStatus: boolean;
}

interface IRoomDocument extends IRoom, Document {
  roomSave: () => Promise<IRoomDocument>;
}

export interface IRoomModel extends Model<IRoomDocument> {
  editRoom: (roomId: String, roomName: String, roomPrice: number, roomStatus: boolean) => Promise<IRoomDocument> 
}

const roomSchema = new Schema<IRoomDocument>({
  roomId: {
    type: String,
    required: true,
  },
  roomName: {
    type: String,
    required: true,
  },
  roomPrice: {
    type: Number,
    required: true,
  },
  roomStatus: {
    type: Boolean,
    required: true,
  },
});


roomSchema.statics.editRoom = async function(roomId: String, roomName: String, roomPrice: number, roomStatus: boolean) {
  const response = await this.findOneAndUpdate({roomId},{roomId,roomName,roomPrice,roomStatus},{new: true})
  if(response) return response
  else throw new Error('Wrong Room Id')
 
}


roomSchema.methods.roomSave = async function (this: IRoomDocument) {
  const room = await Room.find({roomId:this.roomId});
  if(room.length===0){
    const savedRoom = await this.save();
    return savedRoom;
  }else{
    throw new Error('Room already Present')
  }
};

export const Room = model<IRoomDocument, IRoomModel>("room", roomSchema);
