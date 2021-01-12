'use strict';

var mongoose = require('mongoose'),
    Expense = mongoose.model('Expense');

exports.delete_an_expense = function(req, res) {
    Expense.deleteOne({_id: req.params.expenseId}, function(err, result) {
        if (err)
            res.send(err);
        res.json({ message: result.deletedCount + ' Expense successfully deleted' });
    });
};

exports.delete_all_expenses = function(req, res) {
    Expense.deleteMany({}, function(err, result) {
        if (err)
            res.send(err);
        res.json({ message: result.deletedCount + ' Expenses successfully deleted' });
    });
};

exports.get_an_expense = function(req, res) {
    Expense.findById(req.params.expenseId, function(err, expense) {
        if (err)
            res.send(err);
        res.json(expense);
    });
};

exports.get_all_expenses = function(req, res) {
    Expense.find({}, function(err, expenses) {
        if (err)
            res.send(err);
        res.json(expenses);
    });
};

exports.insert_an_expense = function(req, res) {
    var new_expense = new Expense(req.body);
    new_expense.save(function(err, expense) {
        if (err)
            res.send(err);
        res.json(expense);
    });
};
  
exports.update_an_expense = function(req, res) {
    Expense.findOneAndUpdate({_id: req.params.expenseId}, req.body, {new: true}, function(err, expense) {
        if (err)
            res.send(err);
        res.json(expense);
    });
};