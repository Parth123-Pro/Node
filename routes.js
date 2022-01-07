const express = require("express")

const Post = require("./models/Post") // new

const router = express.Router()


// Get all posts

router.get("/posts", async (req, res) => {

    const post = await Post.find()

    res.send(post)

})
router.get("/posts/:item", async (req, res) => {

    const post = await Post.findOne({ _id: req.params.item })

    res.send(post)

})


module.exports = router