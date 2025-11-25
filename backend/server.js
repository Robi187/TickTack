const fs = require("fs");
const https = require("https");
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend via HTTPS läuft!");
});

https.createServer(
  {
    key: fs.readFileSync("/certs/localhost+2-key.pem"),
    cert: fs.readFileSync("/certs/localhost+2.pem"),
  },
  app
).listen(5000, () => {
  console.log("HTTPS Backend läuft auf https://localhost:5000");
});
