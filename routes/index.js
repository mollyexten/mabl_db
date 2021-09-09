import { Router } from "express";
import postRoutes from "./post.js"

const router = Router();


router.get("/", (req, res) => res.send("This is api root"));

router.use("/posts", postRoutes)

export default router;