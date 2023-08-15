const path = require('path');
const cors=require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const sequelize=require('./util/database')
const pc=require('./controllers/productsController')
const Product=require('./models/product')
const User=require('./models/user')
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminData.routes);
app.use(shopRoutes);

app.use(pc.notFoundPage);

Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'})

sequelize.sync().then((res)=>{
    
    app.listen(4000);
}).catch((err)=>{
    console.log('got error')
})

