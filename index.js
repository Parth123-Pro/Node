const express = require("express")

const mongoose = require("mongoose")

const routes = require("./routes") 

var bodyParser =require('body-parser')

mongoose

    .connect("mongodb://127.0.0.1:27017/acmedb", { useNewUrlParser: true })

    .then(() => {

        console.log("connected")
        const app = express()
app.use(bodyParser.urlencoded({extended:false}))
        app.use("/api", routes) // new


        app.listen(5000, () => {

            console.log("Server has started!")

        })

   }).catch((e)=>{
    console.log(e.toString())
})
