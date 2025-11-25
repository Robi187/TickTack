const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend läuft erfolgreich!");
});

app.listen(5000, () => {
  console.log("Backend gestartet auf Port 5000");
});
