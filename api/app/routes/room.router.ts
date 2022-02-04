import { Request, Response, Router } from "express";

import { addRooms,getRooms } from "../controllers/room.controller";
export const router = Router()

router.route('/')
      .get(getRooms)
      .post(addRooms)





export default router;