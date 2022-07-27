// importar as dependencias

const express = require('express');
require('dotenv').config()
const cors = require('cors')
const gatosRotas = require('./routes/gatosRoutes')
const db = require("./database/mongoConfig")
const pessoasRotas = require('./routes/pessoasRoutes')

// criar a api
const app = express();

// configurar a api
app.use(express.json())
app.use(cors())
db.connect()
// rotas
//         path     rotas
 app.use("/gatos", gatosRotas)
 app.use("/pessoas", pessoasRotas)


// exporta ( deixa publica) a nossa api
//module.exports = app


// importar as dependencias
//const express = require('express');
//require('dotenv').config()
//const cors = require('cors')
 
 //const db = require("./database/mongoConfig")
// criar a api
//const app = express();

// configurar a api

// rotas
//         path     rotas
 

// exporta ( deixa publica) a nossa api
module.exports = app