const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const YearSchema = new Schema({
  name: String,
  duraction: String,
  Arcents: [
    {
      type: Schema.Types.ObjectId,
      ref: "Arcent"
    }
  ],
  list_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "List"
    }
  ]
});

var Year = mongoose.model("Year", YearSchema);
module.exports = Year;
