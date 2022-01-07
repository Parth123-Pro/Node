const express = require("express")

const mongoose = require("mongoose")

const routes = require("./routes") // new


mongoose

    .connect("mongodb://127.0.0.1:27017/acmedb", { useNewUrlParser: true })

    .then(() => {

        console.log("connected")
        const app = express()

        app.use("/api", routes) // new


        app.listen(5000, () => {

            console.log("Server has started!")

        })

    })