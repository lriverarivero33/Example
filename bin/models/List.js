const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  name: String,
  descripcion: String,
  gender: String,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  Year_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Year"
    }
  ]
});

var List = mongoose.model("List", ListSchema);
module.exports = List;
