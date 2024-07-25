import express from "express";
import { createpost, getallpost, getsinglepost, deletepost, updatepost } from "../controllers/control.js";

const router = express.Router();

router.post("/hello", createpost);
router.get("/posts", getallpost);
router.get("/singleposts", getsinglepost);
router.delete("/delete", deletepost);
router.put("/update", updatepost);
export default router;

