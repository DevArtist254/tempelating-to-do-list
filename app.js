//1.1
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const PORT = 3000
const connectDB = require("./config/db")
const cors = require("cors")

const FullTopic = require("./models/FullTopic")
const Task = require("./models/Tasks")
const Time = require("./models/Time")

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

////////////////////////////////Updating the  entire doc //////////////
app.get("/", (req, res) => {
  res.render("index")
})

/////////////////////////Query search conversion//////////////////

app.post("/", async (req, res) => {
  //1. user enters data
  const stringData = await req.body.heading

  //2. conversion to the string to URL stands with a function which returns an output
  const urlString = encodeURIComponent(stringData)

  res.redirect(`/list/` + urlString)
})

/////////////////////////Topic /////////////////////

app.get("/list/:topic", (req, res) => {
  const topic = req.params.topic
  const defaultList = [
    "your items will appear here",
    "<-- They can be deleted here",
  ]

  //console.log(topic)
  FullTopic.findOne({heading: topic}, (err, foundList) => {
    if (!err) {
      if (!foundList) {
        //if the is no such doc we should create a new one and save it in the database
        const filledList = new FullTopic({
          heading: topic,
          taskList: defaultList,
        })

        filledList.save()

        res.redirect("/list/" + topic)
      } else {
        //if the is such a list then render list with the info from the docs
        res.render("list", {
          heading: foundList.heading,
          list: foundList.taskList,
        })
      }
    } else {
      console.log(err)
    }
  })
})

//

////////////////////////////About/////////////////
app.get("/about", (req, res) => {
  res.render("about")
})
//1.2
//1.21
app.listen(PORT, () => {
  console.log(`DevArtist Server is runing on port ${PORT}`)
})
