const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://localhost:27017/men")
                .then("Connected To Database")


module.exports = connection                