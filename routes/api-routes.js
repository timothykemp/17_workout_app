const db = require("../models");

module.exports = (app) => {

    // *Create workout Post
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
            .then(workoutData => {
                res.json(workoutData)
            })
            .catch(err => {
                res.json(err)
            })
    });


    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).sort(({ date: 1 }))
            .then(workoutData => {
                res.json(workoutData);
            })
            .catch(err => {
                res.json(err);
            })
    });



    app.put("/api/workouts/:id", ({ body, params }, res) => {
        console.log('body :>> ', body);

        db.findByIdAndUpdate(
            params.id,
            { push: { exercises: body } },
            { new: true, runValidators: true }
        )
            .then(workoutData => res.json(workoutData))
            .catch(err => {
                res.json(err)
            })
    });
};

