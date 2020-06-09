const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useUnifiedTopology: true,
});

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "nameless man?"],
  },
  age: {
    type: Number,
    min: [10, "you're a kiddo!"],
    max: 60,
  },
});

const Person = mongoose.model("person", personSchema);

const person = new Person({
  name: "John",
  age: 9,
});

// person.save();

// Person.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     fruits.forEach((element) => {
//       console.log(element.name);
//     });
//     // console.log(fruits);
//   }
// });

Person.updateMany({ name: "John" }, { name: "lol" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    console.log("successfull");
  }
});
// Person.deleteOne({ name: "John" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("deleted");
//   }
// });
