import multer from "multer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, join(__dirname, "../../public/uploads"));  
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

export const upload = multer({ storage });
