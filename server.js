const fs = require('fs');
const path = require("path");

const express = require('express');
const app = express();
app.use(express.static("public"));

const PORT = process.env.PORT || 3002;

const apiRoutes = require('./routes/apiRoutes')
app.use('/api', apiRoutes)

const htmlRoutes = require('./routes/htmlRoutes')
app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log('API server now on port 3002!');
});