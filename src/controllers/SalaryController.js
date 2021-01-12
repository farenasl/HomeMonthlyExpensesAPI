'use strict';

var mongoose = require('mongoose'),
    Salary = mongoose.model('Salary');

exports.delete_a_salary = function(req, res) {
    Salary.deleteOne({_id: req.params.salaryId}, function(err, result) {
        if (err)
            res.send(err);
        res.json({ message: result.deletedCount + ' Salary successfully deleted' });
    });
};

exports.delete_all_salaries = function(req, res) {
    Salary.deleteMany({}, function(err, result) {
        if (err)
            res.send(err);
        res.json({ message: result.deletedCount + ' Salaries successfully deleted' });
    });
};

exports.get_a_salary = function(req, res) {
    Salary.findById(req.params.salaryId, function(err, salary) {
        if (err)
            res.send(err);
        res.json(salary);
    });
};

exports.get_all_salaries = function(req, res) {
    Salary.find({}, function(err, salaries) {
        if (err)
            res.send(err);
        res.json(salaries);
    });
};

exports.insert_a_salary = function(req, res) {
    var new_salary = new Salary(req.body);
    new_salary.save(function(err, salary) {
        if (err)
            res.send(err);
        res.json(salary);
    });
};
  
exports.update_a_salary = function(req, res) {
    Salary.findOneAndUpdate({_id: req.params.salaryId}, req.body, {new: true}, function(err, salary) {
        if (err)
            res.send(err);
        res.json(salary);
    });
};