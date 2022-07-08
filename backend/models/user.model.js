// Imports
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// Schéma User
const userSchema = new mongoose.Schema({
	pseudo: { type: String, default: ''},
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role: { type: Number, default: 1040 }
})


// plugin mongoose creation de valeurs unique
userSchema.plugin(uniqueValidator)

// Export
module.exports = mongoose.model('User', userSchema)