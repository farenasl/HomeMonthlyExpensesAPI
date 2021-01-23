require('dotenv').config();

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./models/UserModel'),
  Salary = require('./models/SalaryModel'),
  Expense = require('./models/ExpenseModel'),
  bodyParser = require('body-parser'),
  swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('../swagger.json');

//SwaggerUI options
var swaggerOptions = {
  swaggerOptions: {
    defaultModelsExpandDepth: -1
  }
};

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.CUSTOMCONNSTR_DATABASE_CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));
//replace next line with router file, example two lines up
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

var routes = require('./routes/HMERoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' ruta no encontrada :-('})
});

app.listen(port);

console.log('[' + Date() + '] HME RESTful API server started on: ' + port);