const express = require('express');

const app = express();

require('./routes')(app)

app.use((req, res, next) => {
    res.send("Hello world")
})

app.listen(1000)