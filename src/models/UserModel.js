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
  salaries: [{
    type: Schema.Types.ObjectId,
    ref: 'Salary'
  }],
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);