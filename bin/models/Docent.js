const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocentSchema = new Schema({
  name1: String,
  name2: String,
  last_name1: String,
  last_name2: String,
  Years: [
    {
      type: Schema.Types.ObjectId,
      ref: "Year"
    }
  ]
});

var Arcent = mongoose.model("Arcent", ArcentSchema);
module.exports = Arcent;
