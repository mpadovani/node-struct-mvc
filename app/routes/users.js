// app/routes/users.js

var UserController = require('../controller/userController.js');

module.exports = function(router) {
    'use strict';
    // This will handle the url calls for /users/:user_id
    router.route('/:userId')
        .get(UserController.getById);
        
    /*
        .put(function(req, res, next) {
        // Update user
    })
        .patch(function(req, res,next) {
        // Patch
    })
        .delete(function(req, res, next) {
        // Delete record
    });
    */

    router.route('/')
        .post(UserController.post)
        .get(UserController.get);
};
