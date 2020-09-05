//1.1
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const PORT = 3000
const connectDB = require("./config/db")
const cors = require("cors")

const FullTopic = require("./models/FullTopic")
const Task = require("./models/Tasks")

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

//create a string to pass into the title when the body is saved
let title = ""

app.get("/", async (req, res) => {
  res.render("index")
})

app.get("/list", (req, res) => {
  Time

  //looking for topic that was submited on input
  FullTopic.findOne({heading: title}, (err, foundTopic) => {
    if (!err) {
      res.render("list", {
        heading: foundTopic.heading,
        tasks: foundTopic.taskList,
      })
    }
  })
})

app.post("/", async (req, res) => {
  const heading = await req.body.heading
  let defaultList = []

  if (heading === "") {
    //deafault item
    const defaultHeading = "Today's Goals"

    //insert the new header
    const topic = new FullTopic({
      heading: defaultHeading,
      taskList: defaultList,
    })

    FullTopic.findOne({heading: defaultHeading}, (err, foundTopic) => {
      if (!err) {
        if (!foundTopic) {
          //save the default item
          topic.save()

          title = defaultHeading
          res.redirect("/list")
        } else {
          res.render("list", {
            heading: foundTopic.heading,
            tasks: foundTopic.taskList,
          })
        }
      }
    })
  } else {
    //insert the new header
    const topic = new FullTopic({
      heading: heading,
      taskList: defaultList,
    })

    FullTopic.findOne({heading: heading}, (err, foundTopic) => {
      if (!err) {
        if (!foundTopic) {
          //save the default item
          topic.save()

          title = heading
          res.redirect("/list")
        } else {
          res.render("list", {
            heading: foundTopic.heading,
            tasks: foundTopic.taskList,
          })
        }
      }
    })
  }
})

app.get("about", async (req, res) => {
  res.render("about")
})

//1.2
//1.21
app.listen(PORT, () => {
  console.log(`DevArtist Server is runing on port ${PORT}`)
})
