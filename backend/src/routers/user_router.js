const express = require("express");
const checkAuth = require("../middleware/auth_middleware");

const router = express.Router();

router.get("/me", checkAuth, (req, res) => {
    res.json({
        message: "Authorized",
        user: req.user
    });
});

module.exports = router;