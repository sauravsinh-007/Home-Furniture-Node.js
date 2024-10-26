const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    role: { type: String, },
    // role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
    email: { type: String, require: true, unique: true },
    password: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    status: { type: String, enum: ['true', 'false'], default: '' },
    photo: { type: String }

})

const userModel = mongoose.model("userModel", UserSchema)

module.exports = userModel