//1.1
const express = require("express")
const bodyParser = require("body-parser")
const PORT = 3000
const cors = require("cors")

let items = []

//1.0
const app = express()

//1.01
app.use(express.static("public"))

//2.0
app.set("view engine", "ejs")

//3.30
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

//2.1
app.get("/", (req, res) => {
  //2.2
  let days = new Date()

  //2.21
  var options = {
    weekday: "long",
  }

  var day = days.toLocaleDateString("en-us", options)

  //2.3,2.31,2.32
  res.render("list", {
    kindOfDay: day,
    //3.34
    newitem: items,
  })
})

//3.1
app.post("/", (req, res) => {
  //3.31
  let item = req.body.nameItem

  //3.32
  items.push(item)

  //3.33
  res.redirect("/")
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
