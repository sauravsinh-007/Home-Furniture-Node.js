const express = require('express');
const router = express.Router();
const menuController = require("../controllers/menu.controller")


router.get("/getMenus", menuController.getMenu);
router.post("/createMenu", menuController.createMenu);
router.put("/updateMenu/:id", menuController.updateMenu);
router.delete("/deleteMenu/:id", menuController.deleteMenu);

module.exports = router;
