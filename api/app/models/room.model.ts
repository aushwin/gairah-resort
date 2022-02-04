import mongoose from 'mongoose'
const {Schema} = mongoose;
const roomSchema = new Schema({
    roomId: {
        type: String,
        required:true
    },
    roomName: {
        type:String,
        required:true
    },
    roomPrice: {
        type: Number,
        required:true
    },
    roomStatus: {
        type: Boolean,
        required:true
    }
})




export const Room = mongoose.model('room',roomSchema)