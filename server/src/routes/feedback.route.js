import { Router } from "express";
import { shareFeedback } from "../controller/feedback.controller.js";
const router = Router();

router.route("/sharefeedback").post(shareFeedback);

export default router;