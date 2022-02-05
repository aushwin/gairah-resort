import { Request,Response,Router } from "express";
import { addGuest } from "../controllers/guest.controller";

const router = Router()

router.route('/')
      .post(addGuest)