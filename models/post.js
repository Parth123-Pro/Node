const mongoose = require("mongoose")

const schema = mongoose.Schema({
    
    item: String,
    qty: String,

})

module.exports = mongoose.model("Post", schema)