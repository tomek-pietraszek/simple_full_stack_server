import express from "express";
import { getCount, updateCount } from "../controllers/countController.js";

const router = express.Router();


router.patch("/:id",updateCount)
router.get("/count", getCount)

export default router
