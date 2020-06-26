const express = require("express")
const bodyParser = require("body-parser")
const PORT = 3000
const cors = require("cors")

const app = express()
//first set our engine
app.set("view engine", "ejs")
app.use(cors())

app.get("/", (req, res) => {
  //init my date program
  let days = new Date()
  //extract days of the week  from our getDay method which will return numbers
  let currentDay = days.getDay()
  //then create an arr to store all the days of the week
  let week = [
    "Sunday",
    "Moday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  res.render("list", {
    kindOfDay: week[currentDay],
  })
})

//create a listening port with the listen method
//it takes two params 1st the listening port 2nd our callback function which allows us to when our server is running
app.listen(PORT, () => {
  console.log(`DevArtist Server is runing on port ${PORT}`)
})
