const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    pageName: { type: String },
    image: { type: String }
});

const contentModel = mongoose.model('Content', contentSchema);
module.exports = contentModel;