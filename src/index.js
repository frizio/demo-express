const express = require('express');
const app = express();

app.set('port', 3000);
const port = app.get('port');

app.listen(
    port,
    () => {
        console.log("Server listening on port " + port);
    }
);
