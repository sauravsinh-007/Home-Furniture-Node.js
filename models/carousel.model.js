const express = require('express')
const mongoose = require('mongoose')

const carouselSchema = new mongoose.Schema({
    pageName: { type: String },
    image: { type: String, required: true },
    description: { type: String },
    status: { type: Boolean, default: false }
})

const carouselModel = mongoose.model('carouselSchema', carouselSchema)

module.exports = carouselModel