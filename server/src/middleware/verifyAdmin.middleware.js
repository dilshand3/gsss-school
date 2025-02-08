import { Admin } from "../model/admin.model.js"

const verifyAdmin = async (req, res, next) => {
    const userId = req.userId
    try {
        const user = await Admin.findById(userId);
        if (!user) {
            return res.status(400).json({ success: false, message: "admin not found" })
        }
        next();
    } catch (error) {
        console.log(`Something went wrong due to ${error}`)
    }
};

export { verifyAdmin };
