// server/index.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var app = express();
app.use(express.static(path.join(__dirname, "..", "html")));
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "html", "index.html"));
});
var port = 5e3;
var server = app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
  setInterval(() => {
  }, 1e3);
});
server.on("error", (error) => {
  console.error("Server error:", error);
});
process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
});
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
});
