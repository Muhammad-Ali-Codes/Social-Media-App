import React from "react";

const Welcome: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>No Posts Yet 📭</h1>

        <p style={styles.subtitle}>
          Looks like you haven't created any posts yet.
        </p>

        <div style={styles.iconBox}>
          <span style={styles.icon}>📝</span>
        </div>

        <p style={styles.text}>
          Start sharing your ideas, notes, or code snippets.
          Your posts will appear here once added.
        </p>

        <button style={styles.button}>
          Create First Post
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f8",
  },
  card: {
    width: "360px",
    padding: "30px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    textAlign: "center" as const,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#666",
  },
  iconBox: {
    margin: "20px 0",
  },
  icon: {
    fontSize: "48px",
  },
  text: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Welcome;
