const pessoasModel = require("../models/pessoaSchema")


const createPessoas = async (req, res) => {
    const { nome, sexo, idade, endereco,telefone,email } = req.body
    if (!nome) {
        return res
            .status(400)
            .json({ message: "O nome da pessoa não pode ser vazio" })
    }
    
    try {
        const newPessoas = new pessoasModel({
            nome: nome,
            sexo: sexo,
            idade: idade,
            endereco: endereco,
            telefone:telefone,
            email:email,
        })
        const savePessoas = await newPessoas.save()
        res.status(201).json(savePessoas)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    

   
}
module.exports = {
    createPessoas
}