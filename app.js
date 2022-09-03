const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopeRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));

app.use(adminRoutes);
app.use(shopeRoutes);

app.use((req, res, next) =>{
 res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
