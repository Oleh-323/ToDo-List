import { useState } from "react";
import {
    deleteTask,
    updateStatus,
    updateTask
} from "../api/tasks";

function TaskCard({ task, reload }) {

    const [edit, setEdit] = useState(false);

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const changeStatus = async (e) => {
        await updateStatus(task.id, e.target.value);
        reload();
    };

    const removeTask = async () => {
        await deleteTask(task.id);
        reload();
    };

    const saveTask = async () => {
        await updateTask(task.id, {
            title,
            description,
            status: task.status
        });

        setEdit(false);

        reload();
    };

    return (
        <div className="task-card">

            {edit ? (
                <>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </>
            ) : (
                <>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </>
            )}

            <select
                value={task.status}
                onChange={changeStatus}
            >
                <option value="todo">Todo</option>
                <option value="in_progress">In progress</option>
                <option value="done">Done</option>
            </select>

            {edit ? (
                <button onClick={saveTask}>
                    Save
                </button>
            ) : (
                <button onClick={() => setEdit(true)}>
                    Edit
                </button>
            )}

            <button onClick={removeTask}>
                Delete
            </button>

        </div>
    );
}

export default TaskCard;