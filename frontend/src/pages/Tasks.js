// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";

// export default function Tasks() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [priority, setPriority] = useState("Medium");
//   const [dueDate, setDueDate] = useState("");

//   const fetchTasks = async () => {
//     try {
//       const res = await axios.get("http://localhost:9000/api/tasks");
//       setTasks(res.data);
//     } catch (err) {
//       console.log("Fetch task error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const createTask = async () => {
//     if (!title.trim()) {
//       alert("Enter task title");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:9000/api/tasks", {
//         title: title,
//         status: "Pending",
//       });

//       setTitle("");
//       fetchTasks();
//     } catch (err) {
//       console.log("Create task error:", err);
//       alert("Task not added");
//     }
//   };

//   const completeTask = async (id) => {
//     await axios.put(`http://localhost:9000/api/tasks/${id}`, {
//       status: "Completed",
//     });

//     fetchTasks();
//   };

//   return (
//     <>
//       <Navbar />

//       <div style={styles.container}>
//         <h1>Tasks</h1>

//         <div style={styles.form}>
//           <input
//             style={styles.input}
//             placeholder="Task Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />

//           <button style={styles.button} onClick={createTask}>
//             Add Task
//           </button>
//         </div>

//         {tasks.map((task) => (
//           <div style={styles.card} key={task._id}>
//             <h3>{task.title}</h3>
//             <p>Status: {task.status}</p>

//             {task.status !== "Completed" && (
//               <button
//                 style={styles.smallButton}
//                 onClick={() => completeTask(task._id)}
//               >
//                 Mark Completed
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// const styles = {
//   container: {
//     width: "600px",
//     margin: "40px auto",
//   },
//   form: {
//     background: "white",
//     padding: "25px",
//     borderRadius: "12px",
//     boxShadow: "0px 0px 10px #ccc",
//   },
//   input: {
//     width: "95%",
//     padding: "12px",
//     marginTop: "10px",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     marginTop: "15px",
//     background: "#4f46e5",
//     color: "white",
//     border: "none",
//   },
//   card: {
//     background: "white",
//     padding: "20px",
//     marginTop: "15px",
//     borderRadius: "10px",
//     boxShadow: "0px 0px 8px #ddd",
//   },
//   smallButton: {
//     padding: "10px",
//     background: "#4f46e5",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//   },
// };

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";

// export default function Tasks() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [priority, setPriority] = useState("Medium");
//   const [dueDate, setDueDate] = useState("");

//   const fetchTasks = async () => {
//     try {
//       const res = await axios.get("http://localhost:9000/api/tasks");
//       setTasks(res.data);
//     } catch (err) {
//       console.log("Fetch task error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const createTask = async () => {
//     if (!title.trim()) {
//       alert("Enter task title");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:9000/api/tasks", {
//         title: title,
//         status: "Pending",
//       });

//       setTitle("");
//       fetchTasks();
//     } catch (err) {
//       console.log("Create task error:", err);
//       alert("Task not added");
//     }
//   };

//   const completeTask = async (id) => {
//     await axios.put(`http://localhost:9000/api/tasks/${id}`, {
//       status: "Completed",
//     });

//     fetchTasks();
//   };

//   return (
//     <>
//       <Navbar />

//       <div style={styles.container}>
//         <h1>Tasks</h1>

//         <div style={styles.form}>
//           <input
//             style={styles.input}
//             placeholder="Task Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />

//           <button style={styles.button} onClick={createTask}>
//             Add Task
//           </button>
//         </div>

//         {tasks.map((task) => (
//           <div style={styles.card} key={task._id}>
//             <h3>{task.title}</h3>
//             <p>Status: {task.status}</p>

//             {task.status !== "Completed" && (
//               <button
//                 style={styles.smallButton}
//                 onClick={() => completeTask(task._id)}
//               >
//                 Mark Completed
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// const styles = {
//   container: {
//     width: "600px",
//     margin: "40px auto",
//   },
//   form: {
//     background: "white",
//     padding: "25px",
//     borderRadius: "12px",
//     boxShadow: "0px 0px 10px #ccc",
//   },
//   input: {
//     width: "95%",
//     padding: "12px",
//     marginTop: "10px",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     marginTop: "15px",
//     background: "#4f46e5",
//     color: "white",
//     border: "none",
//   },
//   card: {
//     background: "white",
//     padding: "20px",
//     marginTop: "15px",
//     borderRadius: "10px",
//     boxShadow: "0px 0px 8px #ddd",
//   },
//   smallButton: {
//     padding: "10px",
//     background: "#4f46e5",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//   },
// };        
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Tasks() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:9000/api/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log("Fetch task error:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async () => {
    if (!title.trim()) {
      alert("Enter task title");
      return;
    }

    try {
      await axios.post("http://localhost:9000/api/tasks", {
        title,
        status: "Pending",
        priority,
        dueDate,
      });

      setTitle("");
      setPriority("Medium");
      setDueDate("");
      fetchTasks();
    } catch (err) {
      alert("Task not added");
    }
  };

  const completeTask = async (id) => {
    await axios.put(`http://localhost:9000/api/tasks/${id}`, {
      status: "Completed",
    });

    fetchTasks();
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || task.status === filter;

    return matchesSearch && matchesFilter;
  });

  const getPriorityColor = (priority) => {
    if (priority === "High") return "#ef4444";
    if (priority === "Medium") return "#f59e0b";
    return "#22c55e";
  };

  const isOverdue = (task) => {
    return (
      task.dueDate &&
      new Date(task.dueDate) < new Date() &&
      task.status !== "Completed"
    );
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1 style={styles.heading}>Tasks</h1>

        <div style={styles.form}>
          <input
            style={styles.input}
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            style={styles.input}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <input
            style={styles.input}
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <button style={styles.button} onClick={createTask}>
            Add Task
          </button>
        </div>

        <div style={styles.filterBox}>
          <input
            style={styles.input}
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            style={styles.input}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>

        {filteredTasks.map((task) => (
          <div
            style={{
              ...styles.card,
              borderLeft: isOverdue(task)
                ? "6px solid #ef4444"
                : `6px solid ${getPriorityColor(task.priority)}`,
            }}
            key={task._id}
          >
            <h3>{task.title}</h3>
            <p>Status: <b>{task.status}</b></p>

            <p>
              Priority:
              <span
                style={{
                  color: getPriorityColor(task.priority),
                  fontWeight: "bold",
                }}
              >
                {" "}{task.priority || "Medium"}
              </span>
            </p>

            <p>
              Due Date:
              {" "}
              {task.dueDate
                ? new Date(task.dueDate).toLocaleDateString()
                : "No due date"}
            </p>

            {isOverdue(task) && (
              <p style={styles.overdue}>⚠ Overdue Task</p>
            )}

            {task.status !== "Completed" && (
              <button
                style={styles.smallButton}
                onClick={() => completeTask(task._id)}
              >
                Mark Completed
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

const styles = {
  container: { width: "650px", margin: "40px auto" },

  heading: {
    textAlign: "center",
    fontSize: "42px",
  },

  form: {
    background: "white",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
    marginBottom: "20px",
  },

  filterBox: {
    background: "white",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "15px",
  },

  button: {
    width: "100%",
    padding: "13px",
    marginTop: "15px",
    background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  card: {
    background: "white",
    padding: "22px",
    marginTop: "16px",
    borderRadius: "14px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
  },

  smallButton: {
    padding: "10px 16px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  overdue: {
    color: "#4447ef",
    fontWeight: "bold",
  },
};