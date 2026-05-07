import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const fetchProjects = async () => {
    const res = await axios.get("https://team-task-manager-production-fca1.up.railway.app");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const createProject = async () => {
    await axios.post("https://team-task-manager-production-fca1.up.railway.app", {
      name,
      description,
    });

    setName("");
    setDescription("");
    fetchProjects();
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>Projects</h1>

        <div style={styles.form}>
          <input
            style={styles.input}
            placeholder="Project Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            style={styles.input}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button style={styles.button} onClick={createProject}>
            Create Project
          </button>
        </div>

        {projects.map((p) => (
          <div style={styles.card} key={p._id}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

const styles = {
  container: {
    width: "600px",
    margin: "40px auto",
  },
  form: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0px 0px 10px #ccc",
  },
  input: {
    width: "95%",
    padding: "12px",
    marginTop: "10px",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    background: "#4f46e5",
    color: "white",
    border: "none",
  },
  card: {
    background: "white",
    padding: "20px",
    marginTop: "15px",
    borderRadius: "10px",
    boxShadow: "0px 0px 8px #ddd",
  },
};



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";

// export default function Projects() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   const [projects, setProjects] = useState([]);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");

//   const fetchProjects = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:9000/api/projects"
//       );

//       setProjects(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const createProject = async () => {
//     if (!name || !description) {
//       alert("Fill all fields");
//       return;
//     }

//     try {
//       await axios.post(
//         "http://localhost:9000/api/projects",
//         {
//           name,
//           description,
//         }
//       );

//       setName("");
//       setDescription("");

//       fetchProjects();
//     } catch (err) {
//       console.log(err);
//       alert("Project not created");
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div style={styles.container}>
//         <h1 style={styles.heading}>Projects</h1>

//         {/* ONLY ADMIN CAN CREATE PROJECT */}

//         {user?.role === "Admin" && (
//           <div style={styles.form}>
//             <input
//               style={styles.input}
//               placeholder="Project Name"
//               value={name}
//               onChange={(e) =>
//                 setName(e.target.value)
//               }
//             />

//             <textarea
//               style={styles.textarea}
//               placeholder="Description"
//               value={description}
//               onChange={(e) =>
//                 setDescription(e.target.value)
//               }
//             />

//             <button
//               style={styles.button}
//               onClick={createProject}
//             >
//               Create Project
//             </button>
//           </div>
//         )}

//         {/* MEMBER MESSAGE */}

//         {user?.role === "Member" && (
//           <div style={styles.memberBox}>
//             <h3>Member Access</h3>

//             <p>
//               You can only view projects.
//               Project creation is restricted
//               to Admin users.
//             </p>
//           </div>
//         )}

//         {/* PROJECT LIST */}

//         {projects.map((p) => (
//           <div style={styles.card} key={p._id}>
//             <h2>{p.name}</h2>

//             <p>{p.description}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// const styles = {
//   container: {
//     width: "700px",
//     margin: "40px auto",
//   },

//   heading: {
//     textAlign: "center",
//     fontSize: "42px",
//     marginBottom: "25px",
//   },

//   form: {
//     background: "white",
//     padding: "30px",
//     borderRadius: "18px",
//     boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
//     marginBottom: "25px",
//   },

//   input: {
//     width: "100%",
//     padding: "14px",
//     marginTop: "12px",
//     borderRadius: "10px",
//     border: "1px solid #d1d5db",
//     fontSize: "15px",
//   },

//   textarea: {
//     width: "100%",
//     padding: "14px",
//     marginTop: "12px",
//     borderRadius: "10px",
//     border: "1px solid #d1d5db",
//     minHeight: "100px",
//     fontSize: "15px",
//   },

//   button: {
//     width: "100%",
//     padding: "14px",
//     marginTop: "18px",
//     background:
//       "linear-gradient(90deg,#4f46e5,#7c3aed)",
//     color: "white",
//     border: "none",
//     borderRadius: "10px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     fontSize: "16px",
//   },

//   card: {
//     background: "white",
//     padding: "24px",
//     marginTop: "18px",
//     borderRadius: "16px",
//     boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
//     borderLeft: "6px solid #4f46e5",
//   },

//   memberBox: {
//     background: "#eef2ff",
//     padding: "20px",
//     borderRadius: "14px",
//     marginBottom: "25px",
//     textAlign: "center",
//     border: "2px solid #4f46e5",
//   },
// };