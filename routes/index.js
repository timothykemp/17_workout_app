const router = require("express").Router();
let Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
})

// HTML - Create new workout or update current workout
router.get("/exercise", (req, res) => {
    res.sendFile("public/exercise.html", { root: '.' });
})

// HTML - View stats dashboard
router.get("/stats", (req, res) => {
    res.sendFile("public/stats.html", { root: '.' });
})

// *Create workout Post
router.post("/api/workouts", (req, res) => {
    console.log('req.body :>> ', req.body);

    Workout.create({})
        .then(workout => {
            res.json(workout)
        })
        .catch(err => {
            res.json(err)
        });
})

router.put("/api/workouts/:id", (req, res) => {
    console.log('req.params.id :>> ', req.params.id);
})

module.exports = router;