const express = require("express")

const Post = require("./models/Post") // new

const router = express.Router()


// Get Method
router.get("/posts", async (req, res) => {

    const post = await Post.find()

    res.send(post)

})

//Post Method
router.post("/posts",async(req,res)=>{
    const ipost = new Post({
        item:req.body.item,
        qty:req.body.qty
    })

    await ipost.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})



module.exports = router
