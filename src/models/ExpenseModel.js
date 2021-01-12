'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
  expense_date: {
    type: Date,
    required: 'Kindly enter the expense date'
  },
  total: {
    type: Number,
    required: 'Kindly enter your expense amount'
  },
  personal_total: {
    type: Number,
    required: 'Kindly enter the personal amount',
    default: 0
  },
  description: {
    type: String,
    required: 'Kindly enter the expense description'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Expense', ExpenseSchema);