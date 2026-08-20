const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Task = sequelize.define("tasks", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    status: {
        type: DataTypes.ENUM("todo", "in_progress", "done"),
        defaultValue: "todo"
    },

    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: "tasks",
    timestamps: true
}
);

module.exports = Task;