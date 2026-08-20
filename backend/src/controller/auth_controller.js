const User = require("../moduls/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email and password are required"
            });
        }

        const existsUser = await User.findOne({
            where: { email }
        });

        if (existsUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        const hashPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            name,
            email,
            password: hashPassword
        });

        return res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};

const login = async (req, res) => {
    try {
        const {email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await User.findOne({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        });

        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};

const getMe = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: ["id", "name", "email"]
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json(user);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};

module.exports = {
    register,
    login,
    getMe
};