export const registerUser = async (userData) => {
    const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Register failed");
    }

    return data;
};

export const loginUser = async (userData) => {
    const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }

    return data;
};

export const getCurrentUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("No token");
    }

    const response = await fetch(
        "http://localhost:8000/auth/me",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    if (!response.ok) {
        throw new Error("Invalid token");
    }

    return response.json();
};
