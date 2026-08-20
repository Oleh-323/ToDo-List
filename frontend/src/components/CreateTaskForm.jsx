import { useState } from "react";
import { createTask } from "../api/tasks";

function CreateTaskForm({ reload }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const create = async (e) => {
        e.preventDefault();

        await createTask({
            title,
            description
        });

        setTitle("");
        setDescription("");

        reload();
    };

    return (
        <form onSubmit={create}>

            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">
                Create
            </button>

        </form>
    );
}

export default CreateTaskForm;