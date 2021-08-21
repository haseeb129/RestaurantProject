const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menu");

router.get("/menuGetAll", menuController.getAllMenu);
router.get("/menuSave", menuController.menuSave);

module.exports = router;
