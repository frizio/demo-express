const path = require('path');
const express = require('express');
const app = express();

// Settings
app.set('port', 3000);
const port = app.get('port');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views') );


// Middlewares

// Routes
app.use(require('./routes/'));

// Static files

// Listening the server
app.listen(
    port,
    () => {
        console.log("Server listening on port " + port);
    }
);
