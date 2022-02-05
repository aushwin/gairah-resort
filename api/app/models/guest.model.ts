import {Schema,model,Model,Document,Types} from 'mongoose'
import { IRoomDocument } from './room.model';

interface IGuest {
    guestName: String;
    guestNumber: String;
    selectedRooms: Array<IRoomDocument>
    foodBill: Array<Object>
}

interface IGuestDocument extends IGuest, Document {
    //methods
}

interface IGuestModel extends Model<IGuestDocument> {
    // static methods 
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

export const Guest = model<IGuestDocument,IGuestModel>("guest", guestSchema)