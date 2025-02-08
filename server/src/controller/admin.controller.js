import { Admin } from "../model/admin.model.js";
import { generateTokenAndSetCookie } from "../utils/cookies.js";
import bcrypt from "bcryptjs";

const signUp = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return res.status(400).json({ success: false, message: "All fields required" });
        }

        const existedUser = await Admin.findOne({ username });
        if (existedUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await Admin.create({
            username,
            password: hashedPassword,
        })

        if (!user) {
            return res.status(400).json({ success: false, message: "Something went wrong" });
        }

        const createdAdmin = await Admin.findById(user._id).select("-password");

        res.status(200).json({
            success: true,
            message: "User created successfully",
            data: createdAdmin,
        });
    } catch (error) {
        console.log(`${error}`);
        res.status(400).json({ success: false, message: "Something went wrong please check the console" })
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return res.status(400).json({ success: false, message: "All field required" })
        }
        const user = await Admin.findOne({
            username
        });
        if (!user) {
            return res.status(400).json({ success: false, message: "user didn't exist" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: "Invalid password" });
        }

        await generateTokenAndSetCookie(res, user._id);
        res.status(200).json({
            success: true,
            message: "Logged in successfully",
            user: {
                ...user._doc,
                password: undefined,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "Something went wrong please check the console" })
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie("etfId", { httpOnly: true, secure: true, sameSite: 'Strict' });
        res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "something went wrong please check the console" });
    }
};

const checkUser = async (req, res) => {
    try {
        const userId = req.userId
        const user = await Admin.findById(userId);
        if (!user) {
            return res.status(400).json({ success: false, message: "user didn't found" })
        }
        res.status(200).json({ success: true, message: "User found succesfully", data: user })
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "something went wrong please check the console" })
    }
}

export { signUp, login, logout, checkUser }