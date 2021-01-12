'use strict';

module.exports = function(app) {
    var user = require('../controllers/UserController');
    var salary = require('../controllers/SalaryController');
    var expense = require('../controllers/ExpenseController');

    app.route('/users')
        .get(user.get_all_users)
        .post(user.insert_an_user)
        .delete(user.delete_all_users);

    app.route('/users/:userId')
        .get(user.get_an_user)
        .put(user.update_an_user)
        .delete(user.delete_an_user);

    app.route('/salaries')
        .get(salary.get_all_salaries)
        .post(salary.insert_a_salary)
        .delete(salary.delete_all_salaries);

    app.route('/salaries/:salaryId')
        .get(salary.get_a_salary)
        .put(salary.update_a_salary)
        .delete(salary.delete_a_salary);

    app.route('/expenses')
        .get(expense.get_all_expenses)
        .post(expense.insert_an_expense)
        .delete(expense.delete_all_expenses);

    app.route('/expenses/:expenseId')
        .get(expense.get_an_expense)
        .put(expense.update_an_expense)
        .delete(expense.delete_an_expense);
};