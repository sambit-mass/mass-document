require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "Node Server";
const ENVIRONMENT = process.env.ENVIRONMENT || "development";

// Home Route
app.get('/', (req, res) => {
    res.send(`
        <h1>🚀 Welcome to ${APP_NAME} on AWS EC2!</h1>
        <p>This server is running in <strong>${ENVIRONMENT}</strong> mode.</p>
        <p>💡 Try accessing <a href="/api/info">/api/info</a> for a JSON response.</p>
        <hr>
        <p>✅ Server Time: ${new Date().toLocaleString()}</p>
        <p>🌍 Your IP Address: ${req.ip}</p>
    `);
});

// Info Route
app.get('/api/info', (req, res) => {
    res.json({
        message: "Welcome to the API",
        server_time: new Date().toISOString(),
        status: "Running smoothly 🚀",
        environment: ENVIRONMENT
    });
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ ${APP_NAME} is running on http://your-ec2-public-ip:${PORT}`);
});
