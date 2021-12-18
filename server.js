const fs = require('fs');
const path = require("path");

const express = require('express');
const app = express();

const apiRoutes = require('./routes/apiRoutes')
app.use('/api', apiRoutes)

const htmlRoute = require('./routes/htmlRoutes')
app.use('/', htmlRoute)

app.listen(3002, () => {
    console.log('API server now')
});