"use client";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdEdit, MdSave } from "react-icons/md";

interface Task {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

interface TodoListProps {
  tasks: Task[];
  markComplete: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (task: Task) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  markComplete,
  deleteTask,
  editTask,
}) => {
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editedTask, setEditedTask] = useState<Task | null>(null);

  const handleEditClick = (task: Task) => {
    setEditingTaskId(task._id);
    setEditedTask(task);
  };

  const handleSaveClick = () => {
    if (editedTask) {
      editTask(editedTask);
      setEditingTaskId(null);
      setEditedTask(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedTask) {
      setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
    }
  };

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task._id}
          className="flex items-center justify-between p-4 border border-gray-500 rounded"
        >
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => markComplete(task._id)}
              className="h-5 w-5 text-green-500"
            />
            {editingTaskId === task._id ? (
              <div>
                <input
                  type="text"
                  name="title"
                  value={editedTask?.title || ""}
                  onChange={handleChange}
                  className="block w-full mb-2 p-2 border rounded"
                />
                <input
                  type="text"
                  name="description"
                  value={editedTask?.description || ""}
                  onChange={handleChange}
                  className="block w-full mb-2 p-2 border rounded"
                />
                <input
                  type="date"
                  name="dueDate"
                  value={editedTask?.dueDate.split("T")[0] || ""}
                  onChange={handleChange}
                  className="block w-full mb-2 p-2 border rounded"
                />
              </div>
            ) : (
              <div>
                <h3
                  className={`${
                    task.completed ? "line-through text-gray-500" : ""
                  } text-xl font-semibold`}
                >
                  {task.title}
                </h3>
                <p
                  className={`${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.description}
                </p>
                <p className={`${task.completed ? "text-gray-500" : ""}`}>
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
          <div className="flex space-x-4">
            {editingTaskId === task._id ? (
              <button
                onClick={handleSaveClick}
                className="px-4 py-2 text-white bg-green-500 rounded"
              >
                <MdSave />
              </button>
            ) : (
              <button
                onClick={() => handleEditClick(task)}
                className="px-4 py-2 text-white bg-blue-500 rounded"
              >
                <MdEdit />
              </button>
            )}
            <button
              onClick={() => deleteTask(task._id)}
              className="px-4 py-2 text-white bg-red-500 rounded"
            >
              <AiOutlineDelete />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
