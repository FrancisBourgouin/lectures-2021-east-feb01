const lecture = {
  title: "Objects in Javascript",
  lecturer: "Francis",
  "📢": "Very loud"
}

// Add a key to the object

lecture.length = 120
lecture["length"] = 120

// Modify a value at a specific key

lecture["📢"] = "loud-ish"
lecture.title = "Super Objects in Super JavaScript of Destiny"

// Delete a key

lecture.cybermen = "DELETE DELETE"
delete lecture.cybermen

// Arrays Or Objects ??

// Arrays -> Is good for independent items
// Object -> Is good for dependent items