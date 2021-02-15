const path = require("path");

// Index route loads index.html
app.get("/", function (_req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Complete or add exercise route loads exercise.html
app.get("/exercise", function (_req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// Stats route loads stats.html
app.get("/stats", function (_req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;