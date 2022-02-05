import express, { json , urlencoded} from 'express'
import { COLORS } from './app/utility/colors'
import { connect } from './app/utility/db'

import { routerInit } from './app/routes/'

const app  = express()
app.use(json())
app.use(urlencoded({extended:true}))
connect()
// Routes
routerInit(app)


app.listen(8080,()=>{
    console.log(COLORS.BgGreen,`***************Gairah Server Started on PORT ${8080} ***************`)
})