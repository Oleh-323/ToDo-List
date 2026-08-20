const Task = require("../moduls/task.model")

const createTask = async (req, res)=>{
    try{
        const {title, description} =req.body;

        if(!title){
            return res.status(400).json({message: "Title is required"});
        }

        const task = await Task.create({
            title,
            description
        });

        res.status(201).json(task);

    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Server error"});
    }
}

const getTasks = async (req, res) =>{
    try {
        const { status } = req.query;

        const allowedStatuses = ["todo", "in_progress", "done"];

        if(status && !allowedStatuses.includes(status)){
            return res.status(400).json({message:"Invalid status"})
        }

        const tasks = await Task.findAll({
            where: status ? { status } : {}
        });
        res.status(200).json(tasks)

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Server error"})
    }

}

const getTaskById = async (req, res) =>{
    try {
        const {id}= req.params;

        if(isNaN(Number(id))){
            return res.status(400).json({message: "Id must be a number"});
        }

        const task = await Task.findByPk(id);

        if(!task){
            return res.status(404).json("Not Found");
        }

        res.status(200).json(task);

    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Server error"});
    }

}

const updateTask= async(req, res) =>{
    try {
        const {id} = req.params;
        const {title, description, status} = req.body;
        
        if(isNaN(Number(id))){
            return res.status(400).json({message: "Id must be a number"});
        }
        
        const task = await Task.findByPk(id);

        if(!task){
            return res.status(404).json("Not Found");
        }

        await task.update({
            title,
            description,
            status
        })

        res.status(200).json(task);

    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"Server erro"})
    }
}

const updateTitle = async(req, res)=>{
    try{
        const {id} = req.params;
        const {title} = req.body;

        if(isNaN(Number(id))){
            return res.status(400).json({message: "Id must be a number"});
        }

        const task = await Task.findByPk(id);

        if(!task){
            return res.status(404).json("Not Found");
        }

        await task.update(
            {title}
        )

        res.status(200).json(task);
    }catch(error){
        console.error(error)
        return res.status(500).json({message:"Server erro"})
    }
}

const updateDescription = async(req, res)=>{
    try{
        const {id} = req.params;
        const {description} = req.body;

        if(isNaN(Number(id))){
            return res.status(400).json({message: "Id must be a number"});
        }

        const task = await Task.findByPk(id);

        if(!task){
            return res.status(404).json("Not Found");
        }

        await task.update(
            {description}
        )

        res.status(200).json(task);
    }catch(error){
        console.error(error)
        return res.status(500).json({message:"Server erro"})
    }
}

const updateStatus = async(req, res)=>{
    try{
        const {id} = req.params;
        const {status} = req.body;
        const allowedStatuses = ["todo", "in_progress", "done"];

        if(isNaN(Number(id))){
            return res.status(400).json({message: "Id must be a number"});
        }

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                message: "Invalid status"
            });
        }

        const task = await Task.findByPk(id);

        if(!task){
            return res.status(404).json("Not Found");
        }

        await task.update(
            {status}
        )

        res.status(200).json(task);
    }catch(error){
        console.error(error)
        return res.status(500).json({message:"Server erro"})
    }
}

const deleteTask = async(req, res)=>{
    try {
        const {id}= req.params;

        if(isNaN(Number(id))){
            return res.status(400).json({message: "Id must be a number"});
        }

        const task = await Task.findByPk(id);

        if(!task){
            return res.status(404).json("Not Found");
        }

        await task.destroy();

        res.status(200).json({message: "Task deleted"});

    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Server error"});
    }
}

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    updateTitle,
    updateDescription,
    updateStatus,
    deleteTask
};