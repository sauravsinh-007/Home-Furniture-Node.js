const express = require("express")
const router = express.Router()

const categoryController = require('../controllers/category.controller')

router.get("/getCategory", categoryController.getAllCategory);
router.post("/createCategory", categoryController.createCategory);
router.put("/updateCategory/:id", categoryController.updateCategory);
router.delete("/deleteCategory/:id", categoryController.deleteCategory);

module.exports = router