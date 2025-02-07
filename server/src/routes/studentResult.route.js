import { Router } from "express";
import { uploadResult } from "../controller/studentResult.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const router = Router();

router.route("/uploadResult").post(upload.single("excelFile"), uploadResult);

export default router;