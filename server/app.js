const express = require("express");
const mongoose = require("mongoose");

const DB_URL = `mongodb://localhost:27017/URL_Shorter`;
const app = express();

require("./routes")(app);

app.set("view engine", "ejs");

app.use((req, res, next) => {
    res.send("Hello world");
});

const port = process.env.PORT | 2000;

mongoose
    .connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('DB Connected');
        app.listen(port, () => {
            console.log(`Server running in ${port} port`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
