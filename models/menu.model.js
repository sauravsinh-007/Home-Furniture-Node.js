const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema({
    name: { type: String, require: true },
    //  parentMenu: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', default: null },
    parentMenu: { type: String },
    menuDescription: { type: String },
    order: { type: Number, default: 0 },
    status: { type: String, enum: ['true', 'false'], default: 'true' }

})

const menuModel = mongoose.model("menuModel", MenuSchema)
module.exports = menuModel