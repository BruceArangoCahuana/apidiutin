const {Sequelize} = require("sequelize");

const database = require("../database/database")
const Usuario = require("./usuario")

const Producto = database.define("producto",{
    idproducto:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:Sequelize.STRING
        
    },
    imagen:{
        type:Sequelize.TEXT
        
    },
    nutrientes:{
        type:Sequelize.STRING
        
    },
    presentacion:{
        type:Sequelize.STRING
       
    },
    sabor:{
        type:Sequelize.STRING
        
    },
    forma_uso:{
        type:Sequelize.STRING
        
    },
    precauciones:{
        type:Sequelize.STRING
        
    },
    contraindicaciones:{
        type:Sequelize.STRING
        
    },
    descripcion:{
        type:Sequelize.TEXT
        
   },
   idusuario:{
    type:Sequelize.INTEGER,
    references:{
        model:Usuario,
        key:"id"
    }
   }
})

Usuario.hasOne(Producto)
module.exports =  Producto;