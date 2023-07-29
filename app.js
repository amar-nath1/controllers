const path = require('path');
const cors=require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const db=require('./util/database')
const pc=require('./controllers/productsController')
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(cors())
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminData.routes);
app.use(shopRoutes);

app.use(pc.notFoundPage);

app.listen(4000);
