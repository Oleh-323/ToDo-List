import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks, reload }) {
    return (
        <div className="task-column">

            <h2>{title}</h2>

            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    reload={reload}
                />
            ))}

        </div>
    );
}

export default TaskColumn;