const app = require("express") 
const controllers = require("../controllers/pessoasControllers");
const rota = app.Router()

rota.post("/create", controllers.createPessoas)
module.exports = rota