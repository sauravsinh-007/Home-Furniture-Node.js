const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.controller")


router.post("/Login", userController.LoginUser);
router.get("/getUsers", userController.getUser);
router.post("/createUser", userController.createUser);
router.put("/updateUser/:id", userController.updateUser);
router.delete("/deleteUser/:id", userController.deleteUser);

module.exports = router;
