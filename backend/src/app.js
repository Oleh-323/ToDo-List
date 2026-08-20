const express= require("express");
const cors = require("cors");
const authRouter= require("./routers/auth_router");
const userRouter= require("./routers/user_router");
const taskRouter= require("./routers/task_router");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/tasks", taskRouter);

app.get("/", (req, res) => {
    res.json({
        message: "Todo backend is working"
    });
});
module.exports = app;