const path = require("path");

module.exports = (app) => {
    // Index route loads index.html
    app.get("/", (_req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Complete or add exercise route loads exercise.html
    app.get("/exercise", (_req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // Stats route loads stats.html
    app.get("/stats", (_req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};
