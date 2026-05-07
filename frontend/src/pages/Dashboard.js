// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";

// export default function Dashboard() {
//   const [tasks, setTasks] = useState([]);

//   const fetchTasks = async () => {
//     try {
//       const res = await axios.get("http://localhost:9000/api/tasks");
//       setTasks(res.data);
//     } catch (err) {
//       console.log("Dashboard task error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const total = tasks.length;
//   const completed = tasks.filter((t) => t.status === "Completed").length;
//   const pending = tasks.filter((t) => t.status === "Pending").length;

//   return (
//     <>
//       <Navbar />

//       <div style={styles.container}>
//         <h1>Dashboard</h1>

//         <div style={styles.grid}>
//           <div style={styles.card}>
//             <h2>{total}</h2>
//             <p>Total Tasks</p>
//           </div>

//           <div style={styles.card}>
//             <h2>{completed}</h2>
//             <p>Completed</p>
//           </div>

//           <div style={styles.card}>
//             <h2>{pending}</h2>
//             <p>Pending</p>
//           </div>
//         </div>

//         <h2 style={{ marginTop: "40px" }}>Recent Tasks</h2>

//         {tasks.map((task) => (
//           <div style={styles.taskCard} key={task._id}>
//             <h3>{task.title}</h3>
//             <p>Status: {task.status}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// const styles = {
//   container: {
//     padding: "40px",
//     textAlign: "center",
//   },
//   grid: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     marginTop: "30px",
//   },
//   card: {
//     width: "200px",
//     padding: "25px",
//     background: "white",
//     borderRadius: "12px",
//     boxShadow: "0px 0px 10px #ccc",
//   },
//   taskCard: {
//     width: "500px",
//     margin: "15px auto",
//     padding: "15px",
//     background: "white",
//     borderRadius: "10px",
//     boxShadow: "0px 0px 8px #ddd",
//   },
// };
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  let user = null;

try {
  const storedUser = localStorage.getItem("user");
  user = storedUser && storedUser !== "undefined"
    ? JSON.parse(storedUser)
    : null;
} catch (error) {
  user = null;
}

  const fetchData = async () => {
    try {
      const taskRes = await axios.get("https://team-task-manager-production-fca1.up.railway.app");
      const projectRes = await axios.get("https://team-task-manager-production-fca1.up.railway.app");

      setTasks(taskRes.data);
      setProjects(projectRes.data);
    } catch (err) {
      console.log("Dashboard error:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "Completed").length;
  const pending = tasks.filter((t) => t.status === "Pending").length;

  const overdue = tasks.filter(
    (t) =>
      t.dueDate &&
      new Date(t.dueDate) < new Date() &&
      t.status !== "Completed"
  ).length;

  const progress =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.welcome}>
          <h1>Welcome Back, {user?.name || "User"} 👋</h1>
          <p>Track your projects, tasks, priorities and team progress.</p>
        </div>

        <h1>Dashboard</h1>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h2>{projects.length}</h2>
            <p>Total Projects</p>
          </div>

          <div style={styles.card}>
            <h2>{total}</h2>
            <p>Total Tasks</p>
          </div>

          <div style={styles.card}>
            <h2>{completed}</h2>
            <p>Completed</p>
          </div>

          <div style={styles.card}>
            <h2>{pending}</h2>
            <p>Pending</p>
          </div>

          <div style={styles.card}>
            <h2>{overdue}</h2>
            <p>Overdue</p>
          </div>
        </div>

        <div style={styles.progressBox}>
          <h2>Overall Progress</h2>
          <div style={styles.progressOuter}>
            <div
              style={{
                ...styles.progressInner,
                width: `${progress}%`,
              }}
            >
              {progress}%
            </div>
          </div>
        </div>

        <h2 style={{ marginTop: "40px" }}>Recent Projects</h2>

        {projects.slice(0, 3).map((project) => (
          <div style={styles.taskCard} key={project._id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}

        <h2 style={{ marginTop: "40px" }}>Recent Tasks</h2>

        {tasks.map((task) => (
          <div style={styles.taskCard} key={task._id}>
            <h3>{task.title}</h3>
            <p>Status: {task.status}</p>
            <p>Priority: {task.priority || "Medium"}</p>
            <p>
              Due Date:{" "}
              {task.dueDate
                ? new Date(task.dueDate).toLocaleDateString()
                : "No due date"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  welcome: {
    maxWidth: "900px",
    margin: "0 auto 35px",
    padding: "35px",
    background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
    color: "white",
    borderRadius: "20px",
    boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  card: {
    width: "190px",
    padding: "25px",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
  },
  progressBox: {
    width: "600px",
    margin: "40px auto",
    padding: "25px",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
  },
  progressOuter: {
    width: "100%",
    height: "28px",
    background: "#e5e7eb",
    borderRadius: "20px",
    overflow: "hidden",
  },
  progressInner: {
    height: "100%",
    background: "linear-gradient(90deg, #22c55e, #16a34a)",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: "28px",
  },
  taskCard: {
    width: "550px",
    margin: "15px auto",
    padding: "20px",
    background: "white",
    borderRadius: "14px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
  },
};