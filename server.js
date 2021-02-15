// Required modules
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Express application
const app = express();

// Allows req.body to actually work
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

// Requiring routes
app.use(require("./routes/html.js"));
app.use(require("./routes/api.js"));

// Listening on port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
