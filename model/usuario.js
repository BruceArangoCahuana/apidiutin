const {Sequelize }  = require("sequelize");

const database = require("../database/database")

const Usuario = database.define("usuario",{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    usuario:{
        type:Sequelize.STRING,
        allowNull:true
    },
    correo:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    pass:{
        type:Sequelize.TEXT,
        allowNull:true
    }
})

module.exports = Usuario;