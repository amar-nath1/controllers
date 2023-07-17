const Product = require('../models/product')

exports.postProducts=(req, res, next) => {
    const p1=new Product(req.body.title)
    p1.save()
    res.status(200).json({message:'post succu hai'})
  }


  exports.getAllProducts=(req, res, next) => {
    const products=Product.fetchAllProducts((products)=>{
     res.status(200).json({list:products})

    })
   
  }

  exports.notFoundPage=(req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  }

