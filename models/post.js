const mongoose = require("mongoose")

const schema = mongoose.Schema({
    
    item: String,
    qty: Number,

})

module.exports = mongoose.model("Post", schema)