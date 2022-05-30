 const Usuario = require('../model/usuario');
 const Producto = require("../model/producto");
const Receta = require("../model/receta");
 
 exports.home  = (req,res) =>{
        res.send("desde la ruta")
 }

 exports.viewUsuario = async(req,res,next) =>{
       try {
              const usuario  = await Usuario.findAll({});
              res.json(usuario)
       } catch (error) {
              console.log(error)
              res.send(error)
              return next()
       }
 }

 exports.insertProducts = async(req,res,next) =>{
        const product = new Producto(req.body)
        try {
         await product.save()
          res.json({menssage:"Se creo correctamente el producto"})
        } catch (error) {
          console.log(error)
          res.send(error)
          return next()
        }
 }

 exports.viewProduct = async(req,res,next) =>{
        try {
              const product = await Producto.findAll({});
              res.json(product)
        } catch (error) {
              console.log(error)
              res.send(error)
              return next()
        }
 }

 exports.insertRectas = async(req,res,next) =>{
       const receta = new Receta(req.body)
       try {
        await receta.save()
        res.json({menssage:"Se creo correctamneta la receta"})
       } catch (error) {
          console.log(error)
          res.send(error)
          return next()
       }
 }

 exports.viewRecetas = async(req,res,next) =>{
        try {
              const recetas = await Receta.findAll({});
              res.json(recetas)
        } catch (error) {
              console.log(error)
              res.send(error)
              return next()
        }
 }

 exports.viewRecetasId = async(req,res,next)=>{
    
       try {
             const recetas = await Receta.findByPk(req.params.idrecetas) 
             res.json(recetas)
       } catch (error) {
              console.log(error)
              res.send(error)
              return next()
       }
 }