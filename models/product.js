
const { json } = require('body-parser')
const p=require('../util/path')
const db=require('../util/database');


module.exports= class Product{
    constructor(t){
        this.title=t
        
    }

    save(){
        
       return db.execute(`INSERT INTO products (title) values('${this.title}')`)

    }



    static fetchAllProducts(){
            return db.execute('SELECT * FROM products')
        
    }

    static deleteItem(id){
        return db.execute(`DELETE FROM products WHERE id = ${id}`)
    
}

}