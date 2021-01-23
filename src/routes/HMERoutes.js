'use strict';

module.exports = function(app) {
    var user = require('../controllers/UserController');

    app.route('/users')
        .get(user.get_all_users)
        .post(user.insert_an_user)
        .delete(user.delete_all_users);

    app.route('/users/:userId')
        .get(user.get_an_user)
        .put(user.update_an_user)
        .delete(user.delete_an_user);

    app.route('/users/:userId/expenses')
        .get(user.get_all_expenses_by_user)
        .post(user.insert_an_expense_by_user)
        .delete(user.delete_all_expenses_by_user);

    app.route('/users/:userId/expenses/:expenseId')
        .get(user.get_an_expense_by_user)
        .put(user.update_an_expense_by_user)
        .delete(user.delete_an_expense_by_user);

    app.route('/users/:userId/salaries')
        .get(user.get_all_salaries_by_user)
        .post(user.insert_a_salary_by_user)
        .delete(user.delete_all_salaries_by_user);

    app.route('/users/:userId/salaries/:salaryId')
        .get(user.get_a_salary_by_user)
        .put(user.update_a_salary_by_user)
        .delete(user.delete_a_salary_by_user);
};