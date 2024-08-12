"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./component/todoForm/page";
import TodoList from "./component/todoList/page";
import ProtectedRoute from "./component/ProctedRotue/page";

interface Task {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

const Home: React.FC = () => {
  // const [tasks, setTasks] = useState<Task[]>([
  //   {
  //     _id: "kjdkfdfheurhejfhdifhdif",
  //     title: "vinay",
  //     description: "kdjfdjk hdjhfaslfh fiuhedk afduf ahfkdhfsjnfjhajfk",
  //     dueDate: "76-07-2024",
  //     completed: false,
  //   },
  //   {
  //     _id: "kjdkfdfheurhejfhdifhdif",
  //     title: "vinay",
  //     description: "kdjfdjk hdjhfaslfh fiuhedk afduf ahfkdhfsjnfjhajfk",
  //     dueDate: "76-07-2024",
  //     completed: false,
  //   },
  //   {
  //     _id: "kjdkfdfheurhejfhdifhdif",
  //     title: "vinay",
  //     description: "kdjfdjk hdjhfaslfh fiuhedk afduf ahfkdhfsjnfjhajfk",
  //     dueDate: "76-07-2024",
  //     completed: false,
  //   },
  //   {
  //     _id: "kjdkfdfheurhejfhdifhdif",
  //     title: "vinay",
  //     description:
  //       "kdjfdjk hdjhfaslfhoijk kjdkfjdkf;jaldkfjakd fkjdkfajkvinay margam laviahs amraga makjh i hello vinay iam i not writting today exam  fiuhedk afduf ahfkdhfsjnfjhajfk",
  //     dueDate: "76-07-2024",
  //     completed: true,
  //   },
  // ]);

  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "https://zendenbackend.onrender.com/api/tasks"
      );
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const markComplete = async (id: string) => {
    try {
      // Fetch the current task details
      const response = await axios.get(
        `https://zendenbackend.onrender.com/api/tasks/${id}`
      );
      const currentTask = response.data;

      // Toggle the completed statusgi
      const updatedCompletedStatus = !currentTask.completed;
      console.log(currentTask.completed);

      // Update the task with the new completed status
      await axios.put(`https://zendenbackend.onrender.com/api/tasks/${id}`, {
        completed: !currentTask.completed,
      });

      // Refresh the task list
      fetchTasks();
    } catch (error) {
      console.error("Error toggling task completion:");
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`https://zendenbackend.onrender.com/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const editTask = async (task: Task) => {
    try {
      const response = await axios.put(
        `https://zendenbackend.onrender.com/api/tasks/${task._id}`,
        task
      );
      if (response.status === 200) {
        fetchTasks(); // Refresh the task list after a successful update
      }
    } catch (error) {
      console.error("Failed to edit task", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <ProtectedRoute>
      <div className="max-w-4xl mx-auto w-[80%] md:w-[40%] mt-8 bg-white p-10 rounded-md">
        <h1 className="mb-8 text-3xl font-bold text-center">Todo App</h1>
        <TodoForm fetchTasks={fetchTasks} />
        <TodoList
          tasks={tasks}
          markComplete={markComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </ProtectedRoute>
  );
};

export default Home;
