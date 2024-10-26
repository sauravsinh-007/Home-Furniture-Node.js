const express = require('express');
const router = express.Router();
const roleController = require("../controllers/role.controller")


router.get("/getRoles", roleController.getRole);
router.post("/createRole", roleController.createRole);
router.put("/updateRole/:id", roleController.updateRole);
router.delete("/deleteRole/:id", roleController.deleteRole);

module.exports = router;
