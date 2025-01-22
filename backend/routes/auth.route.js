import express from "express";
import { authCheck, login, logout, register } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.get("/authCheck", protectRoute, authCheck);

export default router;
