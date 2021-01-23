'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter your name'
  },
  lastname: {
    type: String,
    required: 'Kindly enter your lastname'
  },
  mail: {
    type: String,
    required: 'Kindly enter your mail address'
  },
  mobile_number: {
    type: String,
    required: 'Kindly enter your phone number'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  salaries: [{
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
  }],
  expenses: [{
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
    created_date: {
      type: Date,
      default: Date.now
    }
  }]
});

module.exports = mongoose.model('User', UserSchema);