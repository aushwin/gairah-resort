import { Request, Response, Router } from "express";

import { addRooms } from "../controllers/room.controller";
export const router = Router()

router.route('/')
      .get((req,res)=>res.send('Hello from room'))
      .post(addRooms)




export default router;