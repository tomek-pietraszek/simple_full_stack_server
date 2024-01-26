import express from "express";
import { updateCount } from "../controllers/countController.js";

const router = express.Router();


router.patch("/:id",updateCount)

export default router
