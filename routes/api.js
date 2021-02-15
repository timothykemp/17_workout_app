const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");
const mongoose = require("mongoose");

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        { $addFields: { totalDuration: { $sum: '$exercises.duration' } } }
    ])
        .then((Workout) => {
            res.json(Workout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Create new workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then((newWorkout) => {
            res.status(200).json(newWorkout)
        })
        .catch((err) => {
            res.json(err)
        });
});


router.put("/api/workouts/:id", (req, res) => {
    let id = req.params.id;

    Workout.findByIdAndUpdate(
        { _id: mongoose.Types.ObjectId(id) },
        { $push: { exercises: req.body } },
        { new: true }
    )
        .then((updateWorkout) => {
            res.json(updateWorkout)
        })
        .catch((err) => {
            res.json(err)
        })
});

module.exports = router;

