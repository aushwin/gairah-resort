import {Schema,model,Model,Document,Types} from 'mongoose'
import { IRoomDocument } from './room.model';

export interface IGuest {
    guestName: String;
    guestNumber: String;
    selectedRooms: Array<IRoomDocument>
    foodBill: Array<Object>
}

interface IGuestDocument extends IGuest, Document {
    //methods
    addGuest : (this: IGuestDocument) => Promise<void>

}

interface IGuestModel extends Model<IGuestDocument> {
    // static methods
    editGuest: (guestName:String,guestNumber:String,selectedRooms:Array<IRoomDocument>)=>Promise<IGuestDocument>
}

const guestSchema = new Schema<IGuestDocument>({
    guestName: {
        type: String,
        required: true
    },
    guestNumber: {
        type: String,
        required: true,
    },
    selectedRooms: [],
    foodBill : []
})

guestSchema.statics.editGuest = async function(guestName:String,guestNumber:String,selectedRooms:Array<IRoomDocument>){
    const response = await this.findOneAndUpdate({guestNumber},{guestName,guestNumber,selectedRooms},{new: true})
    if(response) return response
    else throw new Error('Guest not found')
}

guestSchema.methods.addGuest = async function(this: IGuestDocument){
    const guest = await Guest.find({guestNumber: this.guestNumber})
    if(guest.length===0){
        const response = await this.save()
        return response;
    }else {
        throw new Error('Guest previously registered')
    }

}


export const Guest = model<IGuestDocument,IGuestModel>("guest", guestSchema)