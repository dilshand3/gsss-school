import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = async (res, userId) => {
    const etfId = jwt.sign({ userId }, process.env.ETF_ID, {
        expiresIn: "7d"
    }
    )
    await res.cookie("etfId", etfId, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 7 * 20 * 60 * 60 * 1000
    })
    return etfId
}