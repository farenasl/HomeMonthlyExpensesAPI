'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SalarySchema = new Schema({
  total: {
    type: Number,
    required: 'Kindly enter your salary amount'
  },
  salary_date: {
    type: Date,
    required: 'Kindly enter the salary settlement date'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Salary', SalarySchema);