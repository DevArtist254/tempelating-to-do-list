//1.1
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dataBase = "dailyOrganiserDB"
const mongoUrl = "mongodb://localhost"
const PORT = 3000
const cors = require("cors")

//connect to mongoose
const url = mongoose.connect(`${mongoUrl}/${dataBase}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//create a new schema for our database

const headerSchema = new mongoose.Schema({
  name: String,
})

const taskSchema = new mongoose.Schema({
  name: String,
})

//Creation of  model collections

const Header = mongoose.model("header", headerSchema)

const Task = mongoose.model("task", taskSchema)

const task1 = new Task({
  name: "write what you will be doing to ?",
})

const task2 = new Task({
  name: "<-- delete your dane tasks here",
})

//store items in a variable
let itemDefault = [task1, task2]

//insert the default items into the database
/**/

let title = ""

//1.0
const app = express()

//1.01
app.use(express.static("public"))

//2.0
app.set("view engine", "ejs")

//3.30
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.get("/", (req, res) => {
  res.render("index")
})

//i want the data i receive then send it to heading of the planner page
app.post("/", (req, res) => {
  let heading = req.body.item

  title = `${heading}`

  res.redirect("/list")
  console.log(`${heading}`)
})

//2.1
app.get("/list", (req, res) => {
  //2.2
  let days = new Date()

  //2.21
  var options = {
    weekday: "long",
  }

  var day = days.toLocaleDateString("en-us", options)

  //3.34
  //future bugs the callback fn should be written n full
  //1. first find all the items in the array
  Task.find({}, function (err, tasks) {
    //check to see whether  the array found has stuff
    if (tasks.length === 0) {
      //it doesn't add the default items
      Task.insertMany(itemDefault, (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log(`the default items were added`)
        }
      })
      //After all  the default items have been added redirect them to the home page
      res.redirect("/list")
    } else {
      //if it does render them
      res.render("list", {kindOfDay: day, newitem: tasks, heading: title})
    }
  })
})

//3.1
app.post("/list", (req, res) => {
  //3.31
  let item = req.body.nameItem

  //3.32
  items.push(item)

  //3.33
  res.redirect("/list")
  console.log(item)
})

//4
app.get("/about", (req, res) => {
  res.render("about")
})

//1.2
//1.21
app.listen(PORT, () => {
  console.log(`DevArtist Server is runing on port ${PORT}`)
})

/**
 *  Task.find((err, tasks) => {
    if (err) {
     
    } else {
      //2.3,2.31,2.32
      
    }
  })
 */
