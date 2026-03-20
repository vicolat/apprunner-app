const express = require('express');
const app = express();

// Port for App Runner or local fallback
const PORT = process.env.PORT || 3000;

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start server and log port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
