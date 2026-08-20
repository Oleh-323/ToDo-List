import TaskColumn from "../components/TaskColumn";
import CreateTaskForm from "../components/CreateTaskForm";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../api/tasks";
import "./TodoList.css";

function TodoList() {
    const {
        data: tasks = [],
        refetch
    } = useQuery({
        queryKey: ["tasks"],
        queryFn: getTasks
    });

    const todoTasks = tasks.filter(
        task => task.status === "todo"
    );

    const progressTasks = tasks.filter(
        task => task.status === "in_progress"
    );

    const doneTasks = tasks.filter(
        task => task.status === "done"
    );

    return (
        <div className="todo-page">

            <h1>Todo List</h1>

            <CreateTaskForm reload={refetch} />

            <div className="board">

                <TaskColumn
                    title="Todo"
                    tasks={todoTasks}
                    reload={refetch}
                />

                <TaskColumn
                    title="In progress"
                    tasks={progressTasks}
                    reload={refetch}
                />

                <TaskColumn
                    title="Done"
                    tasks={doneTasks}
                    reload={refetch}
                />

            </div>

        </div>
    );
}

export default TodoList;