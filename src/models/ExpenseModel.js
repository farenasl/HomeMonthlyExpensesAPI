'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
  total: {
    type: Number,
    required: 'Kindly enter your expense amount'
  },
  personal_total: {
    type: Number,
    // required: 'Kindly enter the personal amount',
    default: 0
  },
  description: {
    type: String,
    required: 'Kindly enter the expense description'
  },
  expense_date: {
    type: Date,
    required: 'Kindly enter the expense date'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Expense', ExpenseSchema);