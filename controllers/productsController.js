const Product = require('../models/product')

exports.postProducts=(req, res, next) => {
    const p1=new Product(req.body.title)
    p1.save()
    .then(()=>{
      res.status(200).json({message:'post succu hai'})
      
    })
    .catch((err)=>{console.log(err)})
  }

  exports.deleteItem=(req,res,next)=>{
    const products=Product.deleteItem(req.params.id)
    .then(([rows,field])=>{
      res.status(200).json({list:rows})
    })
    .catch((err)=>{console.log(err)})
  }


  exports.getAllProducts=(req, res, next) => {
    const products=Product.fetchAllProducts()
    .then(([rows,field])=>{
      res.status(200).json({list:rows})
    })
    .catch((err)=>{console.log(err)})
   
  }

  exports.notFoundPage=(req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  }

