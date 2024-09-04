import express from "express";
import {
  getAuthor,
  getUserById,
  loginUser,
  registerUser,
} from "../controllers/userController.js";
import { autheticate } from "../middleware/authenticate.js";
const router = express.Router();
router.post("/add", registerUser);
router.post("/login", loginUser);
router.get("/", autheticate, getUserById);
router.get("/author/:id", autheticate, getAuthor);
export default router;
