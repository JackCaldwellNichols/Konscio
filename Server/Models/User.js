const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: false},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    time: {type: String, required: false},
    message:{type: String, required: false},
    contact:{type: Boolean, default: false},
    isAdmin: {type: Boolean, default: false}
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema)