const express = require("express");
const checkAuth = require("../middleware/auth_middleware");
const router = express.Router();

const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    updateTitle,
    updateDescription,
    updateStatus,
    deleteTask
} = require("../controller/task_controller");

router.use(checkAuth);

router.post("/create", createTask);
router.get("/getAll/", getTasks);
router.get("/getAll/getbyid/:id", getTaskById);
router.put("/update/byid/:id", updateTask);
router.patch("/update/title/:id", updateTitle);
router.patch("/update/description/:id", updateDescription);
router.patch("/update/status/:id", updateStatus);
router.delete("/delete/task/:id", deleteTask);

module.exports = router;
