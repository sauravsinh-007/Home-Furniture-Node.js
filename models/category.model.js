const { type, status } = require("express/lib/response");
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    parentCategory: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    status: {
        type: Boolean
    },


});

const categoryModel = mongoose.model("categorySchema", categorySchema)

module.exports = categoryModel