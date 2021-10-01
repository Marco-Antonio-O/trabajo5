const morgan = require("morgan")
const express = require("express")
const app = express()
require("dotenv").config()
require("./src/db.js")

//MIDLEWARES

app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false}))

//ROUTES
app.use('/users', require('./src/routes/routesuser'))

//SETTINGS

const port = process.env.PORT || 4000
app.listen(port, console.log("Sevidor corriendo en el puerto", port))