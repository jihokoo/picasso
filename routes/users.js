var express = require("express");
var router = express.Router();
var user = require("../app/controllers/users");

router.get("/", user.getAll);
router.get("/:userId", user.getOne);
router.post("/", user.create);
router.put("/:userId", user.update);
router.delete("/:userId", user.remove);

module.exports = router;
