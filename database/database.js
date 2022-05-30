const {Sequelize} = require("sequelize")

const database = new  Sequelize('diutin', 'root', 'MARVEL123b',{
    host:"localhost",
    dialect:"mysql",
    port:'3307',
    operatorsAliases:false,
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle:10000
    }
})

module.exports = database