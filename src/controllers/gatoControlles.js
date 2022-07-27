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
console.log("aa")
  try {
    const getAllGatos = await gatoModel.find(query);
    console.log("entrou que")
    res.status(200).json(getAllGatos);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// Update gato  by the id in the request
const updateGato = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update!",
    });
  }

  const id = req.params.id;

  gatoModel
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Gato with id=${id}. !`,
        });
      } else res.send({ message: "Gato was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Gato with id=" + id,
      });
    });
};

// Delete Gato with the specified id in the request
const deleteGato = (req, res) => {
  const id = req.params.id;

  gatoModel
    .findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Gato with id=${id}. Maybe Gato was not found!`,
        });
      } else {
        res.send({
          message: "Gato was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "nao foi possivel excluir o gato id=" + id,
      });
    });
};

// Delete todos os gatos from the database.
const deleteAll = (req, res) => {
  Gato.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Gatos were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Cultivas.",
      });
    });
};

// Find all published Gatos
// exports.findAllPublished = (req, res) => {
//   Gato.find({ published: true })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Gatos."
//       });
//     });
// };

module.exports = {
  createGato,
  getFindGatos,
  updateGato,
  deleteGato,
  deleteAll,
};
