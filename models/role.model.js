const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
});

const roleModel = mongoose.model("roleModel", roleSchema);

module.exports = roleModel