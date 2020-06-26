const express = require("express")
const bodyParser = require("body-parser")
const PORT = 3000

const app = express()

//create a listening port with the listen method
//it takes two params 1st the listening port 2nd our callback function which allows us to when our server is running
app.listen(PORT, () => {
  console.log(`DevArtist Server is runing on port ${PORT}`)
})
