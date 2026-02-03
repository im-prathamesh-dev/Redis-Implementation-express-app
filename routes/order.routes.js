import express from "express";
import { createOrder, getStats } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/stats", getStats);

export default router;
