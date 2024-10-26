const carouselService = require('../services/carouselServices');
const express = require("express")


const getCarousel = async (req, res) => {
    try {
        await carouselService.getAllCarousel(req, res);
    } catch (err) {
        console.error(err);
    }
};


const createCarousel = async (req, res) => {
    // console.log('req', req.body)
    try {
        await carouselService.createCarousel(req, res);
    } catch (err) {
        console.error(err);
    }
};

const updateCarousel = async (req, res) => {
    try {
        await carouselService.updateCarousel(req, res);
    } catch (err) {
        console.error(err);
    }
};

const deleteCarousel = async (req, res) => {
    try {
        await carouselService.deleteCarousel(req, res);
    } catch (err) {
        console.error(err);
    }
};

module.exports = { getCarousel, createCarousel, updateCarousel, deleteCarousel };
