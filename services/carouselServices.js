const carousel = require("../models/carousel.model")
const express = require('express');

const getAllCarousel = async (req, res) => {
    try {
        const carouseldata = await carousel.find()
        console.log("carousel Data get Successfully");
        res.status(200).json(carouseldata)

    } catch (err) {
        console.log('err', err)
        res.status(500).json({ error: "Internal server error" })

    }
}

const createCarousel = async (req, res) => {
    try {
        const carouseldata = req.body
        console.log('carouseldata', carouseldata)

        const newCarousel = new carousel(carouseldata)
        const response = await newCarousel.save()
        console.log("New carousel Data Saved")
        res.status(200).json(response)

    } catch (err) {
        console.log('err', err)
        res.status(501).json({ error: "Internal Server Error" })

    }
}

const updateCarousel = async (req, res) => {
    const carouselID = req.params.id;
    const updatedData = req.body;
    console.log('updatedData', updatedData)

    try {
        if (updatedData.email) {
            const existingUser = await carousel.findOne({
                email: updatedData.email, _id: {
                    $ne: carouselID

                }
            });
            if (existingUser) {
                return res.status(400).json({ error: 'Email already exists' });
            }
        }

        const updatedCarousel = await carousel.findByIdAndUpdate(carouselID, updatedData, { new: true });
        if (!updatedCarousel) {
            return res.status(404).json({ error: 'Carousel not found' });
        }

        res.status(200).json(updatedCarousel);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const deleteCarousel = async (req, res) => {
    try {
        const carouselID = req.params.id;
        // console.log('carouselID', carouselID);

        const response = await carousel.findByIdAndDelete(carouselID);

        if (!response) {
            return res.status(404).json({
                error: 'Carousel not found'
            });
        }

        console.log("User Data Deleted");
        return res.status(200).json({ message: "carousel Data Deleted Successfully" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }

}

module.exports = { getAllCarousel, createCarousel, updateCarousel, deleteCarousel }