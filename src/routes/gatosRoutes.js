const app = require("express") 
const controllers = require("../controllers/gatoControlles");
const rota = app.Router()

rota.post("/create", controllers.createGato)


rota.get('/gato', controllers.getFindGatos)




module.exports = rota