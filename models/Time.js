//Set up our date new object
let days = new Date()

//2.21
var options = {
  weekday: "long",
}

module.exports = days.toLocaleDateString("en-us", options)
