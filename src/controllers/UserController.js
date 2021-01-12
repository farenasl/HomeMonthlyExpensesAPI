'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.delete_an_user = function(req, res) {
    User.deleteOne({_id: req.params.userId}, function(err, result) {
        if (err)
            res.send(err);
        res.json({ message: result.deletedCount + ' User successfully deleted' });
    });
};

exports.delete_all_users = function(req, res) {
    User.deleteMany({}, function(err, result) {
        if (err)
            res.send(err);
        res.json({ message: result.deletedCount + ' Users successfully deleted' });
    });
};

exports.get_an_user = function(req, res) {
    User.findById(req.params.userId, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.get_all_users = function(req, res) {
    User.find({}, function(err, users) {
        if (err)
            res.send(err);
        res.json(users);
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
  
exports.update_an_user = function(req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};