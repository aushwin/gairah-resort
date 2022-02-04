import { Request, Response, Router } from "express";

import { addRooms,editRoom,getRooms } from "../controllers/room.controller";
export const router = Router()

router.route('/')
      .get(getRooms)
      .post(addRooms)


router.route('/edit/:id')
      .post(editRoom)


export default router;