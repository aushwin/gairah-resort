import { Request,Response,Router } from "express";
import { addGuest, fetchGuest } from "../controllers/guest.controller";

const router = Router()

router.route('/')
      .get(fetchGuest)
      .post(addGuest)


export default router;