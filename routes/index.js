const apiRoutes = require("./api-routes");
const htmlRoutes = require("./html-routes");
const router = require("express").Router();

router.use("/api", apiRoutes);
router.use(htmlRoutes);

module.exports = router;