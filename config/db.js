const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://localhost:27017/men")
    .then("Connected To Database")

if (!connection) {
    console.log("Fail to Connect")
}
else {
    console.log("Connected Success")
}


module.exports = connection                