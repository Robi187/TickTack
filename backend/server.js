// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Beispiel-Route (alle deine API-Routen kommen hier rein)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hallo aus dem Node-Backend 👋" });
});

// Beispiel: Todos
app.get("/api/todos", (req, res) => {
  res.json([
    { id: 1, title: "Docker Setup bauen", done: false },
    { id: 2, title: "Nuxt-Frontend anschließen", done: false },
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend läuft auf Port ${PORT}`);
});
