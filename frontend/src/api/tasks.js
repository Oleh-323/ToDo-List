export const getTasks = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(
        "http://localhost:8000/tasks/getAll",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    if (!response.ok) {
        throw new Error("Failed to load tasks");
    }

    return response.json();
};

export const getTaskById = async (id) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
        `http://localhost:8000/tasks/getbyid/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    if (!response.ok) {
        throw new Error("Failed to load task");
    }

    return response.json();
};

export const createTask = async (taskData) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
        "http://localhost:8000/tasks/create",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify(taskData)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to create task");
    }

    return response.json();
};

export const updateTask = async (id, taskData) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
        `http://localhost:8000/tasks/update/byid/${id}`,
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify(taskData)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update task");
    }

    return response.json();
};

export const updateTitle = async (id, title) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
        `http://localhost:8000/tasks/update/title/${id}`,
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify({
                title
            })
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update title");
    }

    return response.json();
};

export const updateDescription = async (id, description) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
        `http://localhost:8000/tasks/update/description/${id}`,
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify({
                description
            })
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update description");
    }

    return response.json();
};

export const updateStatus = async (id, status) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
        `http://localhost:8000/tasks/update/status/${id}`,
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify({
                status
            })
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update status");
    }

    return response.json();
};

export const deleteTask = async (id) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
        `http://localhost:8000/tasks/delete/task/${id}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    if (!response.ok) {
        throw new Error("Failed to delete task");
    }

    return response.json();
};