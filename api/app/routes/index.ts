
import { Application } from 'express'
import { COLORS } from '../utility/colors'

import roomRouter from './room.router'
import guestRouter from './guest.router'

export const routerInit = (app:Application) =>{
    console.log(COLORS.FgGreen,'Routes initialized')

    app.use('/api/rooms/',roomRouter)
    app.use('/api/guests/',guestRouter)
}