const express = require('express');
const path = require('path');
const app = express();

// Port for App Runner or local fallback
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, JS if any)
app.use(express.static(__dirname));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
