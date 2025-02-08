import { Router } from "express";
import { checkUser, login, logout, signUp } from "../controller/admin.controller.js";
import { verifyToken } from "../middleware/verifyToken.middleware.js";
import { verifyAdmin } from "../middleware/verifyAdmin.middleware.js";
const router = Router();

router.route("/signup").post(verifyToken, verifyAdmin, signUp);
router.route("/login").post(login);
router.route("/logout").get(verifyToken, logout);
router.route("/checkUser").get(verifyToken, verifyAdmin, checkUser);

export default router;