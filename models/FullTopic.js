const mongoose = require("mongoose")
// Get the Schema constructor
var Schema = mongoose.Schema

const topicSchema = new mongoose.Schema({
  heading: String,
  taskList: {
    type: Schema.Types.Array,
    ref: "task",
  },
})

module.exports = mongoose.model("topic", topicSchema)
