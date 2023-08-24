const Product = require('../models/product')
const User = require('../models/user')
const Cart=require('../models/cart')
const CartItem=require('../models/cart-item')
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
    }).then((addedUser)=>{
        Cart.create({
          userId:addedUser.id
        })
      res.status(200).json({'data':addedUser})
    })
  }

exports.addToCart=(req,res,next)=>{

  CartItem.findAll({
    where:{
      productId:req.body.productId
    }
  }).then((exItem)=>{
    
    if (exItem.length>0){
      
        CartItem.update({
          quantity:exItem[0]['quantity']+=1
        },{
          where:{
            productId:req.body.productId
          }
        })

        
    }
    else{

      Cart.findAll({
        where:{
          userId:req.params.id
        }
      }).then((foundUser)=>{
        CartItem.create({
          quantity:req.body.quantity,
          cartId: foundUser[0].id,
          productId:req.body.productId
        }).then((addedItem)=>{
          res.status(200).json({'list':addedItem})
        })
      })

    }
  })

  
}
exports.getAllCartItems=(req,res,next)=>{
  CartItem.findAll().then((cartItems)=>{
    res.status(200).json({'list':cartItems})
})
}

  exports.getAllUsers=(req,res,next)=>{
    User.findAll().then((users)=>{
        res.status(200).json({'list':users})
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

  exports.deleteCartItem=(req,res,next)=>{
    CartItem.destroy({
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

