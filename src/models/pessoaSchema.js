const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PessoaSchema = new Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  nome: { type: String, required: true },
  sexo: { type: String, required: true },
  idade: { type: String, required: true },
  email: { type: String, required: true },
  telefone:{ type: Number, required: true },
});

module.exports = mongoose.model("pessoas", PessoaSchema);
