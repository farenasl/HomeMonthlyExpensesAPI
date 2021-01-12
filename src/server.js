require('dotenv').config();

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./models/UserModel'),
  Salary = require('./models/SalaryModel'),
  Expense = require('./models/ExpenseModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.CUSTOMCONNSTR_DATABASE_CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/HMERoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' ruta no encontrada :-('})
});

app.listen(port);

console.log('[' + Date() + '] HME RESTful API server started on: ' + port);