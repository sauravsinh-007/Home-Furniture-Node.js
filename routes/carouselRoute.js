const express = require('express');
const router = express.Router();
const carouselController = require("../controllers/carousel.controller")


router.get("/getCarousel", carouselController.getCarousel);
router.post("/createCarousel", carouselController.createCarousel);
router.put("/updateCarousel/:id", carouselController.updateCarousel);
router.delete("/deleteCarousel/:id", carouselController.deleteCarousel);

module.exports = router;
