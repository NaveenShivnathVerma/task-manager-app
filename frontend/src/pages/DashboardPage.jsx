import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { token, logout } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  const navigate = useNavigate();

  const API_BASE_URL = "https://task-manager-app.onrender.com";

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    const fetchTasks = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/tasks`, {
          headers: { Authorization: token },
        });
        setTasks(res.data);
      } catch (err) {
        console.error("❌ Error fetching tasks:", err);
      }
    };

    fetchTasks();
  }, [token, navigate]);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/tasks`,
        {
          title: newTask,
          description: "Added by user",
        },
        {
          headers: { Authorization: token },
        }
      );
      setTasks([...tasks, res.data]);
      setNewTask("");
    } catch (err) {
      console.error("❌ Error adding task:", err);
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      const res = await axios.put(
        `${API_BASE_URL}/api/tasks/${id}`,
        { completed },
        {
          headers: { Authorization: token },
        }
      );
      setTasks((prev) =>
        prev.map((task) => (task._id === id ? res.data : task))
      );
    } catch (err) {
      console.error("❌ Error toggling task:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/tasks/${id}`, {
        headers: { Authorization: token },
      });
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (err) {
      console.error("❌ Error deleting task:", err);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task._id);
    setEditedTitle(task.title);
  };

  const saveEdit = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${API_BASE_URL}/api/tasks/${id}`,
        { title: editedTitle },
        {
          headers: { Authorization: token },
        }
      );
      setTasks((prev) =>
        prev.map((task) => (task._id === id ? res.data : task))
      );
      setEditingTask(null);
    } catch (err) {
      console.error("❌ Error editing task:", err);
    }
  };

  return (
    <div className="p-4 sm:p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">📋 Your Tasks</h1>

      <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          type="text"
          className="flex-1 border p-2 rounded"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </form>

      <ul>
        {tasks.length === 0 ? (
          <li className="text-gray-500 text-center">No tasks yet</li>
        ) : (
          tasks.map((task) => (
            <li
              key={task._id}
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between border p-3 mb-2 rounded shadow ${
                task.completed ? "bg-green-100" : "bg-white"
              }`}
            >
              <div className="flex items-start sm:items-center gap-3 w-full">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task._id, !task.completed)}
                />
                <div className="flex-1">
                  {editingTask === task._id ? (
                    <input
                      type="text"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                      className="border p-1 w-full rounded"
                    />
                  ) : (
                    <h3
                      className={`font-semibold ${
                        task.completed ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {task.title}
                    </h3>
                  )}
                </div>
              </div>

              <div className="flex gap-2 mt-2 sm:mt-0">
                {editingTask === task._id ? (
                  <button
                    onClick={(e) => saveEdit(e, task._id)}
                    className="text-sm text-green-600 underline"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(task)}
                    className="text-sm text-blue-600 underline"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => deleteTask(task._id)}
                  className="text-sm text-red-500 underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      <button
        onClick={logout}
        className="mt-6 text-sm text-red-500 underline hover:text-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
