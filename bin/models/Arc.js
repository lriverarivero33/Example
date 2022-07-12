const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArcSchema = new Schema({
  name: String,
  descripcion: String,
  gender: String,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  Inst_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Inst"
    }
  ]
});

var Arc = mongoose.model("Arc", ArcSchema);
module.exports = Arc;
