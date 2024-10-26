const express = require("express")
const router = express.Router()
const contentController = require("../controllers/content.controller")

router.get("/getContent", contentController.getContent);
router.post("/createContent", contentController.createContent);
router.put("/updateContent/:id", contentController.updateContent);
router.delete("/deleteContent/:id", contentController.deleteContent);

module.exports = router;