const { Route } = require("express")
const  express = require("express")
const { route } = require("express/lib/application")
const router =  express.Router()

//// controler
const inicioController = require("../controller/InicioController")

module.exports = function(){
    router.get("/",inicioController.home)
    router.get("/usuario",inicioController.viewUsuario)

    router.post("/producto",inicioController.insertProducts)
    router.get("/productos",inicioController.viewProduct)

    router.post("/receta",inicioController.insertRectas)
    router.get("/recetas",inicioController.viewRecetas)    

    router.get("/recetas/:idrecetas",inicioController.viewRecetasId)
    
    return router
}