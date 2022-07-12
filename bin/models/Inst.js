const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstSchema = new Schema({
  name: String,
  duraction: String,
  Cargs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Carg"
    }
  ],
  Arc_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Arc"
    }
  ]
});

var Inst = mongoose.model("Inst", InstSchema);
module.exports = Inst;
