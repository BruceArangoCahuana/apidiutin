const  express = require("express")
const router = require("./routers")
const bodyParser =  require("body-parser")

const  database = require("./database/database");
//importar el  modelo para crear tabala
require("./model/usuario")
require("./model/producto")
require("./model/receta")
database.sync()
.then(()=>console.log("conectado")).catch(error => console.error("error de conexio",error))

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
//conexion databse


app.use("/",router())


app.listen(5000,()=>{console.log("servidor listo")})