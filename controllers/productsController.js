const Product = require('../models/product')
const User = require('../models/user')

exports.postProducts=(req, res, next) => {
  
    Product.create({
      title:req.body.title,
      userId:req.body.userId
    }).then(()=>{
      res.json({'payload':req.body})
    })
  }

  exports.addUsers=(req,res,next)=>{
    User.create({
          username:req.body.username,
          email:req.body.email,
          mobileNum:req.body.mobileNumber
    })
  }

  exports.deleteItem=(req,res,next)=>{
    
    Product.destroy({
      where:{
        id:req.params.id
      }
    }).then((delRes)=>{
      res.status(200).json({list:delRes})
    })
  }


  exports.getAllProducts=(req, res, next) => {
    
    Product.findAll()
    .then((products)=>{
      res.json({'list':products})
    })
   
  }

  exports.notFoundPage=(req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  }

