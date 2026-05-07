// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// export default function Signup() {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "Member",
//   });

//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       await axios.post(
//         "http://localhost:9000/api/auth/signup",
//         data
//       );

//       alert("Signup Successful");

//       navigate("/");
//    } catch (err) {
//   console.log("FULL SIGNUP ERROR:", err);
//   console.log("BACKEND ERROR:", err.response?.data);
//   alert(err.response?.data?.message || err.message || "Signup Failed");
// }
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Signup</h1>

//       <input
//         style={styles.input}
//         placeholder="Name"
//         onChange={(e) =>
//           setData({
//             ...data,
//             name: e.target.value,
//           })
//         }
//       />

//       <input
//         style={styles.input}
//         placeholder="Email"
//         onChange={(e) =>
//           setData({
//             ...data,
//             email: e.target.value,
//           })
//         }
//       />

//       <input
//         style={styles.input}
//         type="password"
//         placeholder="Password"
//         onChange={(e) =>
//           setData({
//             ...data,
//             password: e.target.value,
//           })
//         }
//       />

//       <select
//         style={styles.input}
//         onChange={(e) =>
//           setData({
//             ...data,
//             role: e.target.value,
//           })
//         }
//       >
//         <option>Member</option>
//         <option>Admin</option>
//       </select>

//       <button
//         style={styles.button}
//         onClick={handleSignup}
//       >
//         Signup
//       </button>

//       <p>
//         Already have account?
//         <Link to="/">
//           Login
//         </Link>
//       </p>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     width: "350px",
//     margin: "100px auto",
//     padding: "30px",
//     background: "white",
//     borderRadius: "10px",
//     boxShadow: "0px 0px 10px #ccc",
//     textAlign: "center",
//   },

//   input: {
//     width: "100%",
//     padding: "10px",
//     marginTop: "10px",
//   },

//   button: {
//     width: "100%",
//     padding: "10px",
//     marginTop: "15px",
//     background: "#4f46e5",
//     color: "white",
//     border: "none",
//   },
// };

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Member",
  });

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post(
        "https://team-task-manager-production-fca1.up.railway.app",
        data
      );

      alert("Signup Successful");

      navigate("/");
    } catch (err) {
      console.log("FULL SIGNUP ERROR:", err);
      console.log("BACKEND ERROR:", err.response?.data);

      alert(
        err.response?.data?.message ||
        err.message ||
        "Signup Failed"
      );
    }
  };

  return (
    <div style={styles.page}>

      {/* HEADER */}

      <header style={styles.header}>
        <h2 style={styles.logo}>
          Team Task Manager
        </h2>

        <div>
          <Link style={styles.navLink} to="/">
            Login
          </Link>

          <Link style={styles.navLink} to="/signup">
            Signup
          </Link>
        </div>
      </header>

      {/* SIGNUP CARD */}

      <div style={styles.container}>
        <h1 style={styles.heading}>
          Create Account 🚀
        </h1>

        <p style={styles.subtext}>
          Signup to manage projects and tasks
        </p>

        <input
          style={styles.input}
          placeholder="Name"
          onChange={(e) =>
            setData({
              ...data,
              name: e.target.value,
            })
          }
        />

        <input
          style={styles.input}
          placeholder="Email"
          onChange={(e) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
        />

        <select
          style={styles.input}
          onChange={(e) =>
            setData({
              ...data,
              role: e.target.value,
            })
          }
        >
          <option>Member</option>
          <option>Admin</option>
        </select>

        <button
          style={styles.button}
          onClick={handleSignup}
        >
          Signup
        </button>

        <p style={{ marginTop: "20px" }}>
          Already have account?
          <Link
            to="/"
            style={styles.signupLink}
          >
            Login
          </Link>
        </p>
      </div>

      {/* FOOTER */}

      <footer style={styles.footer}>
        <p>
          © 2026 Team Task Manager | Built with React,
          Node.js & MongoDB
        </p>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #eef2ff, #f5f3ff)",
    display: "flex",
    flexDirection: "column",
  },

  header: {
    height: "70px",
    background:
      "linear-gradient(90deg, #4f46e5, #7c3aed)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    color: "white",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
  },

  logo: {
    margin: 0,
    fontSize: "28px",
  },

  navLink: {
    color: "white",
    textDecoration: "none",
    marginLeft: "20px",
    fontWeight: "bold",
    fontSize: "16px",
  },

  container: {
    width: "420px",
    margin: "70px auto",
    padding: "40px",
    background: "white",
    borderRadius: "20px",
    boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  heading: {
    marginBottom: "10px",
    color: "#111827",
  },

  subtext: {
    color: "#6b7280",
    marginBottom: "25px",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginTop: "15px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "15px",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "14px",
    marginTop: "20px",
    background:
      "linear-gradient(90deg, #4f46e5, #7c3aed)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  signupLink: {
    marginLeft: "5px",
    color: "#4f46e5",
    fontWeight: "bold",
    textDecoration: "none",
  },

  footer: {
    marginTop: "auto",
    background: "#111827",
    color: "white",
    textAlign: "center",
    padding: "18px",
    fontSize: "14px",
  },
};