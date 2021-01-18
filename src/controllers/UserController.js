'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Expense = mongoose.model('Expense'),
    Salary = mongoose.model('Salary');

exports.delete_all_users = function(req, res) {
    User.deleteMany({}, function(err, result) {
        if (err)
            res.send(err);
        res.json({ message: result.deletedCount + ' Users successfully deleted' });
    });
};

exports.delete_an_expense = async function(req, res) {
    const user = await User.findOne({_id: req.params.userId});
    user.expenses.pull({ _id: req.params.expenseId });
    user.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.delete_a_salary = async function(req, res) {
    const user = await User.findOne({_id: req.params.userId});
    user.salaries.pull({ _id: req.params.salaryId });
    user.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.delete_all_expenses = async function(req, res) {
    const user = await User.findOne({_id: req.params.userId});
    const items = user.expenses.length;
    user.expenses = [];
    user.save(function(err, result) {
        if (err)
            res.send(err);
        res.json({ message: items + ' Expenses were deleted for user ' + req.params.userId });
    });
};

exports.delete_all_salaries = async function(req, res) {
    const user = await User.findOne({_id: req.params.userId});
    const items = user.salaries.length;
    user.salaries = [];
    user.save(function(err, result) {
        if (err)
            res.send(err);
        res.json({ message: items + ' Salaries were deleted for user ' + req.params.userId });
    });
};

exports.delete_an_user = function(req, res) {
    User.deleteOne({_id: req.params.userId}, function(err, result) {
        if (err)
            res.send(err);
        res.json({ message: result.deletedCount + ' User successfully deleted' });
    });
};

exports.get_all_users = function(req, res) {
    User.find({}, function(err, users) {
        if (err)
            res.send(err);
        res.json(users);
    });
};

exports.get_all_expenses_by_user = function(req, res) {
    User.findById(req.params.userId, function(err, user) {
        if (err)
            res.send(err);
        res.json(user['expenses']);
    });
};

exports.get_all_salaries_by_user = function(req, res) {
    User.findById(req.params.userId, function(err, user) {
        if (err)
            res.send(err);
        res.json(user['salaries']);
    });
};

exports.get_an_expense = async function(req, res) {
    User.findById(req.params.userId, function(err, user) {
        if (err)
            res.send(err);
        res.json(user.expenses.id(req.params.expenseId));
    });
};

exports.get_a_salary = async function(req, res) {
    User.findById(req.params.userId, function(err, user) {
        if (err)
            res.send(err);
        res.json(user.salaries.id(req.params.salaryId));
    });
};

exports.get_an_user = function(req, res) {
    User.findById(req.params.userId, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.insert_an_expense_by_user = async function(req, res) {
    var new_expense = new Expense(req.body);
    const user = await User.findOne({_id: req.params.userId});
    user.expenses.push(new_expense);
    user.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.insert_a_salary_by_user = async function(req, res) {
    var new_salary = new Salary(req.body);
    const user = await User.findOne({_id: req.params.userId});
    user.salaries.push(new_salary);
    user.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.insert_an_user = function(req, res) {
    var new_user = new User(req.body);
    new_user.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.update_a_salary = function(req, res) {
    User.findOneAndUpdate({
        _id: req.params.userId,
        salaries: {
            $elemMatch: {_id: req.params.salaryId}
        }},
        {
            $set: {
                'salaries.$.total': req.body.total,
                'salaries.$.salary_date': req.body.salary_date
            }
        },
        {'new': true, 'safe': true, 'upsert': true}, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
};

exports.update_an_expense = function(req, res) {
    User.findOneAndUpdate({
        _id: req.params.userId,
        expenses: {
            $elemMatch: {_id: req.params.expenseId}
        }},
        {
            $set: {
                'expenses.$.expense_date': req.body.expense_date,
                'expenses.$.total': req.body.total,
                'expenses.$.personal_total': req.body.personal_total,
                "expenses.$.description": req.body.description
            }
        },
        {'new': true, 'safe': true, 'upsert': true}, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
};

exports.update_an_user = function(req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};