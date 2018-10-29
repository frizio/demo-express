const path = require('path');
const express = require('express');
const app = express();

// Settings
app.set('port', 3000);
const port = app.get('port');

// Middlewares

// Routes
app.get(
    '/',
    (req, res) => {
        console.log('Path hit');
        res.sendFile(path.join(__dirname, '/views/index.html'));
    }
);

// Static files

// Listening the server
app.listen(
    port,
    () => {
        console.log("Server listening on port " + port);
    }
);
