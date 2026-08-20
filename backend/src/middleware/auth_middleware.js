const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
    try {
        const header = req.headers.authorization;

        if (!header) {
            return res.status(401).json({
                message: "Authorization token is missing"
            });
        }

        const parts = header.split(" ");
        const token = parts[1];

        if (!token) {
            return res.status(401).json({
                message: "Token is not found"
            });
        }

        const userData = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = userData;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
};

module.exports = checkAuth;