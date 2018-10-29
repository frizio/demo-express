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
        res.send('Hello from the demo server');
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
