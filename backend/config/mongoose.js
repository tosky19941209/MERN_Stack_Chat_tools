module.exports = () => {
    const mongoose = require("mongoose")
    const config = require("./env/config")
    mongoose.connect(config.db)
    .then(() => {
        console.log("mongoose is connected");
    })
}