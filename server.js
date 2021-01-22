const express = require("express");
const mongoose = require("mongoose");
let Workout = require("./models/workout");

const PORT = process.env.PORT || 3000;

const app = express();

// Allows req.body to actually work
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
})


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
