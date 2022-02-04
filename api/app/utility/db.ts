import mongoose from 'mongoose'
import { COLORS } from './colors'
export const connect = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/gairah-resort')
        console.log(COLORS.FgGreen,'DB connected')
    }catch(e:unknown){
       if(e instanceof Error){
        console.log(COLORS.FgRed,e.message)
       }
    }
}

