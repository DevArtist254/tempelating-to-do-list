const express = require("express")
const router = express.Router()

const FullTopic = require("../models/FullTopic")

// @route  requset-Post  endPoint-api/fullTopic
// @desc   send the header over to promote

router.post("/", async (req, res) => {
  const heading = req.body.heading

  try {
    if (heading === "") {
      //creation of a default header
      const defaultHeader = "Todays Goal's"

      //set the default
      const topic = new FullTopic({
        heading: defaultHeader,
      })

      //save the default item
      topic.save()

      res.redirect("/list")
    } else {
      console.log(`add the new topic in the database`)
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
