"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

// interface TodoFormProps {
//   fetchTasks: () => any;
// }

const TodoForm = ({ fetchTasks }: any) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("https://zendenbackend.onrender.com/api/tasks", {
        title,
        description,
        dueDate,
      });
      fetchTasks();
      setTitle("");
      setDescription("");
      setDueDate("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value);
    };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-4">
      <input
        type="text"
        value={title}
        onChange={handleInputChange(setTitle)}
        placeholder="Title"
        className="w-full px-4 py-2 border border-gray-500 rounded"
      />
      <textarea
        value={description}
        onChange={handleInputChange(setDescription)}
        placeholder="Description"
        className="w-full px-4 py-2 border  border-gray-500 rounded"
      />
      <input
        type="date"
        value={dueDate}
        onChange={handleInputChange(setDueDate)}
        className="w-full px-4 py-2 border border-gray-500 rounded"
      />
      <button
        type="submit"
        className="px-4 py-2   text-white bg-blue-500 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
