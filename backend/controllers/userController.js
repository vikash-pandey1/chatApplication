import { User } from '../model/userModel.js'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Enter right password" });
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: "Username aleredy exist" })
        }
        // user to convert password into hash form
        const hashPassword = await bcrypt.hash(password, 10);

        // profle photo
        const profile = "https://i.pravatar.cc/300"
        await User.create({
            fullName,
            username,
            password: hashPassword,
            profilePhoto: profile,
            gender
        });
        return res.status(201).json({
            message: "Account created successfully",
            success: true
        })
    } catch (err) {
        console.log(err)
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        };

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                message: "incorrect username or password",
                success: false,
            })
        };

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "incorrect username or password",
                success: false,
            })
        };

        const tokenData = {
            userId: user._id
        }

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            _id: user._id,
            username: user.username,
            fullName: user.fullName,
            profilePhoto: user.profilePhoto
        });
    } catch (err) {
        console.log(err)
    }
}

export const logout = (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "logged out successfully"
        })
    } catch (err) {
        console.log(err)
    }
}

export const getOutherUsers = async (req, res) => {
    try {
        const loggedInUserId = req.id;
        const otherUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        return res.status(200).json(otherUsers)
    } catch (error) {
        console.log(error)
    }
}