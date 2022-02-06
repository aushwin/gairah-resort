import { Request,Response,Router } from "express";
import { addGuest, editGuest, fetchGuest } from "../controllers/guest.controller";

const router = Router()

router.route('/')
      .get(fetchGuest)
      .post(addGuest)

router.route('/edit/')
      .post(editGuest)
      

export default router;