
const { json } = require('body-parser')
const p=require('../util/path')
const fs=require('fs')
const path=require('path')
const filepath=path.join(p,'data','products.json')

module.exports= class Product{
    constructor(t){
        this.title=t
        this.ptype='book'
    }

    save(){
        
        fs.readFile(filepath,(err,filecontent)=>{
            let products=[]
            if (!err){
                
                products=JSON.parse(filecontent)
            }
            products.push(this)
            fs.writeFile(filepath,JSON.stringify(products),(err)=>{
                console.log(err)
            })

        })

    }

    static fetchAllProducts(cb){
            
        fs.readFile(filepath,(err, filecontent)=>{
            if (err){
                console.log(err)
            }

            else{
                cb(JSON.parse(filecontent.toString()))
            }
            
            
               
        })

    
    }
}