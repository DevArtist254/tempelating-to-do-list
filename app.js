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

const taskSchema = new mongoose.Schema({
  name: String,
})

const topicSchema = new mongoose.Schema({
  name: String,
  list: [taskSchema],
})

//Creation of  model collections

const Task = mongoose.model("task", taskSchema)

const Topic = mongoose.model("topic", topicSchema)

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
    res.render("list", {kindOfDay: day, newitem: tasks, heading: title})
  })
})

//3.1
app.post("/list", (req, res) => {
  //3.31
  let item = req.body.nameItem

  //3.32
  const task = new Task({
    name: item,
  })

  task.save()

  //3.33
  res.redirect("/list")
  console.log(item)
})

app.post("/Delete", (req, res) => {
  const checkBoxId = req.body.checkbox

  Task.findByIdAndRemove(checkBoxId, (err, doc) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`the document was removed`)
    }
  })
  res.redirect("/list")
})

//4
app.get("/about", (req, res) => {
  res.render("about")
})

app.get("/:topic", (req, res) => {
  const topic = req.body.params.topic

  Topic.findOne({name: topic}, function (err, foundTopic) {
    if (!err) {
      if (!foundTopic) {
        const newTopic = new Topic({
          name: topic,
          tasks: [],
        })

        newTopic.save()

        res.redirect("/" + topic)
      } else {
        res.render("list", {heading: foundTopic.name, newitem: foundTopic.list})
      }
    }
  })
})

//1.2
//1.21
app.listen(PORT, () => {
  console.log(`DevArtist Server is runing on port ${PORT}`)
})
