const {model, Schema } = require("mongoose")

const userSh = new Schema({

email: {type: String, unique: true, required: true},
password: {type: String, required: true},
role: {type: String, default: "usuario"},
estado: {type: Boolean, default: true}

})

module.exports = model("Users", userSh)