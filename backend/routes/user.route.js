import { Router } from "express";
// import { jwtVerify } from "../middleware/jwtVerify.js";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.post("/register",registerUser)


export default router;