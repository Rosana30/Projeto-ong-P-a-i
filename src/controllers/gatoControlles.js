const gatoModel = require("../models/gatoSchema");

const createGato = async (req, res) => {
  const { nome, sexo, idade, local } = req.body;
  if (!nome) {
    return res
      .status(400)
      .json({ message: "O nome do gato não pode ser vazio" });
  }

  try {
    const newGato = new gatoModel({
      nome: nome,
      sexo: sexo,
      idade: idade,
      local: local,
    });
    const saveGato = await newGato.save();
    res.status(201).json(saveGato);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFindGatos = async (req, res) => {
  //const { idade, sexo, local } = req.query;

  let query = {};

  // if (filterGatos.length === 0) {
  //     return res.status(200).json({
  //         message:"Ainda não possuimos gatos cadastrados em nosso banco de dados"
  //     })
  // }

//   if (idade) {
//     query.idade = new RegExp(idade, "i");
//     // filtergatos = filtergatos.filter(currentGatos => currentGatos
//     //     .idade
//     //     .includes(idade)
//     // )
//   }

//   if (sexo) {
//     query.sexo = new RegExp(sexo, "i");
//     // filtergatos = filtergatos.filter(currentGatos => currentGatos
//     //     .sexo
//     //     .includes(sexo)
//     // )
//   }

//   if (local) {
//     query.local = new RegExp(local, "i");
//     // filtergatos = filtergatos.filter(currentGatos => currentGatos
//     //     .local
//     //     .includes(sexo)
//     // )
//   }

  //   if (filterGatos.length === 0) {
  //     throw new Error(
  //       "desculpa, mas não foi encontrado nenhum resultado para essa busca"
  //     );
  //   }

  try {
    const getAllGatos = await gatoModel.find(query);
    res.status(200).json(getAllGatos);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  createGato,
  getFindGatos,
};
