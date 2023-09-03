const express = require('express');
const router = require('./src/router/user.routes');
const app = express();

app.use("/api/v1",router)

module.exports = app