const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CargSchema = new Schema({
  name1: String,
  name2: String,
  last_name1: String,
  last_name2: String,
  Insts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Inst"
    }
  ]
});

var Carg = mongoose.model("Carg", CargSchema);
module.exports = Carg;
