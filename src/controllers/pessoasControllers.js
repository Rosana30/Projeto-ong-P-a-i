const pessoasModel = require("../models/pessoaSchema");

const createPessoas = async (req, res) => {
  const { nome, sexo, idade, endereco, telefone, email } = req.body;
  if (!nome) {
    return res
      .status(400)
      .json({ message: "O nome da pessoa não pode ser vazio" });
  }

  try {
    const newPessoas = new pessoasModel({
      nome: nome,
      sexo: sexo,
      idade: idade,
      endereco: endereco,
      telefone: telefone,
      email: email,
    });
    const savePessoas = await newPessoas.save();
    res.status(201).json(savePessoas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Usuario with the specified id in the request
const deleteUsuario = (req, res) => {
  const id = req.params.id;

  pessoasModel.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete usuario with id=${id}. Maybe Usuario was not found!`
        });
      } else {
        res.send({
          message: "Usuario was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "nao foi possivel excluir o usuario id=" + id
      });
    });
};

module.exports = {
  createPessoas,
  deleteUsuario
};
