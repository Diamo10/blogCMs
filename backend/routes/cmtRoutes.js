import express from "express";
import {
  deleteComment,
  getComment,
  postComment,
} from "../controllers/cmtController.js";
import { autheticate } from "../middleware/authenticate.js";

const router = express.Router();

router.get("/:id", autheticate, getComment);
router.post("/:id", autheticate, postComment);
router.delete("/:id", autheticate, deleteComment);
export default router;
