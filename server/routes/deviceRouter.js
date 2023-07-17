const Router = require("express");
const router = new Router();
const devicController = require("../controllers/deviceController");
router.post("/",devicController.create);
router.get("/",devicController.getAll);
router.get("/:id",devicController.getOne);


module.exports = router;
