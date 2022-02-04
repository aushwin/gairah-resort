
import { Application } from 'express'
import { COLORS } from '../utility/colors'
import roomRouter from './room.router'

export const routerInit = (app:Application) =>{

   console.log(COLORS.FgGreen,'Routes initialized')
    app.use('/api/rooms/',roomRouter)
}