import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={styles.navbar}>
      <h2>Team Task Manager</h2>

      <div>
        <Link style={styles.link} to="/dashboard">Dashboard</Link>
        <Link style={styles.link} to="/projects">Projects</Link>
        <Link style={styles.link} to="/tasks">Tasks</Link>
        <button style={styles.btn} onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    background: "#4f46e5",
    color: "white",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    color: "white",
    marginRight: "20px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  btn: {
    padding: "8px 15px",
    background: "white",
    color: "#4f46e5",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};