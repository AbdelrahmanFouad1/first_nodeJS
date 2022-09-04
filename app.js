const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminData = require('./routes/admin');
const shopeRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopeRoutes);

app.use((req, res, next) =>{
 res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

