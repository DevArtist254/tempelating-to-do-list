//1.1
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const PORT = 3000
const connectDB = require("./config/db")
const cors = require("cors")

//1.0
const app = express()

//1.01
app.use(express.static("public"))

//2.0
app.set("view engine", "ejs")

//3.30
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

//Connect Database
connectDB()

app.get("/", async (req, res) => {
  res.render("index")
})

app.get("/list", async (req, res) => {
  res.render("list")
})

app.get("about", async (req, res) => {
  res.render("about")
})

// Define Routes
//use takes in the params to define the routes for the apis
//1st "/api/users" for http://localhost:3000/tasks
//2nd require("./tasks") for the data
app.use("/tasks", require("./routes/tasks"))
app.use("/fullTopic", require("./routes/fullTopic"))
//1.2
//1.21
app.listen(PORT, () => {
  console.log(`DevArtist Server is runing on port ${PORT}`)
})
