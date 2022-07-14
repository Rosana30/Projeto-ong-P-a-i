const app = require("express") 
const controllers = require("../controllers/gatoControlles");
const rota = app.Router()

rota.post("/create", controllers.createGato)
module.exports = rota