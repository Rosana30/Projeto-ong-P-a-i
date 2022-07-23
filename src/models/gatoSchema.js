const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let GatoSchema = new Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  nome: { type: String, required: true },
  sexo: { type: String, required: true },
  idade: { type: String, required: true },
  local: { type: String, required: true },
});

module.exports = mongoose.model("gato", GatoSchema);
