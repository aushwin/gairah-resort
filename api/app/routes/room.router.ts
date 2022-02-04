import { Request, Response, Router } from "express";

import { addRooms,editRoom,fetchRooms } from "../controllers/room.controller";
export const router = Router()

router.route('/')
      .get(fetchRooms)
      .post(addRooms)


router.route('/edit/:id')
      .post(editRoom)


export default router;