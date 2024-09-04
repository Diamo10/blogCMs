import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogByAuthorID,
  getBlogByID,
  updateBlog,
} from "../controllers/blogController.js";
import { autheticate } from "../middleware/authenticate.js";

const router = express.Router();

router.post("/add", autheticate, createBlog);
router.get("/list", getBlog);
router.get("/:id", autheticate, getBlogByID);
router.get("/author/:id", autheticate, getBlogByAuthorID);
router.put("/update/:id", autheticate, updateBlog);
router.delete("/delete/:id", autheticate, deleteBlog);
export default router;
