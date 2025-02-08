import { Router } from "express";
import { uploadResult } from "../controller/studentResult.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyToken } from "../middleware/verifyToken.middleware.js";
import { verifyAdmin } from "../middleware/verifyAdmin.middleware.js";
const router = Router();

router.route("/uploadResult").post(verifyToken, verifyAdmin, upload.single("excelFile"), uploadResult);

export default router;