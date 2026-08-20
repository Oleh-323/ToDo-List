const express = require("express");
const router = express.Router();

const {
    register,
    login,
    getMe
} = require("../controller/auth_controller");

const checkAuth = require("../middleware/auth_middleware");

router.post("/register", register);
router.post("/login", login);
router.get("/me", checkAuth, getMe);

module.exports = router;