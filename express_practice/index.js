const express = require('express');

const app = express();

app.listen(4494);

const server = app.listen(() => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});