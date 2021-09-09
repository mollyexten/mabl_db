import { Router } from "express";
import { getAllPosts, getPost, createPost, updatePost, deletePost } from "../controllers/posts.js";

const router = Router();

// get all posts
router.get("/", getAllPosts);
// get one post
router.get("/:id", getPost);
// create a post
router.post("/", createPost);
// update a post
router.put("/:id", updatePost);
// delete a post
router.delete("/:id", deletePost);

export default router;