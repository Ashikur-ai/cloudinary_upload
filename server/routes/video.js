import express from "express";
import { createVideo } from "../controllers/video";

const router = express.Router();
router.post("/", createVideo);

export default router;