const app = require("express") 
const controllers = require("../controllers/pessoasControllers");
const rota = app.Router()

rota.post("/create", controllers.createPessoas)

rota.delete("/excluir/:id", controllers.deletePessoas)

rota.put("/update/:id", controllers.updatePessoas)


module.exports = rota

