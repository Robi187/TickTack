const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "myapp"
};

// DB Verbindung testen
app.get("/api/db-test", async (req, res) => {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const [rows] = await conn.query("SELECT 1 + 1 AS result");
    res.json({ success: true, result: rows[0].result });
  } catch (err) {
    console.error("DB ERROR:", err); // <-- WICHTIG!
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  // SIMPLE Beispiel: echter Login kommt später (Datenbank)
  if (username === "admin" && password === "1234") {
    return res.json({ success: true, token: "FAKE-TOKEN-ABC123" });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
});


app.listen(4000, () => console.log("Backend läuft auf Port 4000"));
