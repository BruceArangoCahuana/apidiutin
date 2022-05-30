const {Sequelize} = require("sequelize");

const database = require("../database/database")
const Usuario = require("./usuario")
const Receta = database.define("receta",{
    idreceta:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    titulo:{
        type:Sequelize.STRING,
        allowNull:false
    },
    imagen:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    procedimiento:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    ingredientes:{
        type:Sequelize.JSON,
       
    },
    idusuario:{
        type:Sequelize.INTEGER,
        references:{
            model:Usuario,
            key:"id"
        }
    }
})
 
Usuario.hasOne(Receta)
module.exports =  Receta;