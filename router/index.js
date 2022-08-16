const express = require('express');

const app = express();

const routes = require('./router/index.js');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(routes);

app.listen(4494);