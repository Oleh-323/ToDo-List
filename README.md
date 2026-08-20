# ToDo List

Simple ToDo List project with frontend and backend.

## Backend

Backend is made with Node.js, Express, Sequelize and PostgreSQL.

Here I have:

- user registration
- login
- JWT authentication
- create task
- update task
- delete task
- get all tasks

## Frontend

Frontend is made with React and Vite.

There are pages for:

- login
- registration
- todo list

## Structure

```text
ToDo-List/
    backend/
        src/
            controller/
                auth_controller.js
                task_controller.js
            database/
                database.js
            middleware/
                auth_middleware.js
            moduls/
                task.model.js
                user.model.js
            routers/
                auth_router.js
                task_router.js
                user_router.js
        app.js
        server.js
        .env.example
        .gitignore
        package.json
        package-lock.json
    frontend/
        src/
            api/    
                auth.js
                tasks.js
            assets/
            components/
                CreateTaskForm.jsx
                TaskCard.jsx
                TaskColumn.jsx
            pages/
                Auth.jsx
                LoginPage.jsx
                RegisterPage.jsx
                TodoList.css
                TodoList.jsx
            App.jsx
            App.css
            main.jsx
            index.css
README.md
```

## How to run

Backend:

```bash
cd backend
npm install
npm run dev
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Frontend and backend should be running at the same time.