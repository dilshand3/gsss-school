import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
    const etfId = req.cookies.etfId || req.headers.authorization?.split(" ")[1];

    if (!etfId) {
        return res.status(401).json({ succes: false, message: "UnAuthorized- no token provided" })
    }
    try {
        const decoded = await jwt.verify(etfId, process.env.ETF_ID)

        if (!decoded) {
            return res.status(401).json({ succes: false, message: "Unauthorized- invalid token" })
        }
        req.userId = decoded.userId
        next()
    } catch (error) {
        console.log("Error in verifyToken", error);
        return res.status(500).json({ success: false, message: "Server error" })
    }
}

export { verifyToken }