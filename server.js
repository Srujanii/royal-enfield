const express = require("express");

const app = express();

const PORT = 3000;

// Serve HTML file
app.use(express.static(__dirname));

// Simple API
app.get("/api/message", (req, res) => {
  res.json({
    message: "Backend is working!"
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});