const gatoModel = require("../models/gatoSchema")


const createGato = async (req, res) => {
    const { nome, sexo, idade, local } = req.body
    if (!nome) {
        return res
            .status(400)
            .json({ message: "O nome do gato não pode ser vazio" })
    }
    
    try {
        const newGato = new gatoModel({
            nome: nome,
            sexo: sexo,
            idade: idade,
            local: local
        })
        const saveGato = await newGato.save()
        res.status(201).json(saveGato)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    

   
}
module.exports = {
    createGato
}