var UserRepositories = require('../repositories/userRepositories.js');
var UserTransformer = require('../transformer/userTransformer.js');

exports.post = (function(req, callback) {
    UserRepositories.post(req, function(err, response) {
        (err) ? callback(400, response) : callback(201, UserTransformer.userTransform(response));
    });
});


exports.getById = (function(req, callback) {
    UserRepositories.getById(req, function(err, response) {
        (err) ? callback(400, response) : callback(200, UserTransformer.userTransform(response));
    });
});


exports.get = (function(req, callback) {
    console.log("get");
    UserRepositories.get(req, function(err, response) {
        (err) ? callback(400, response) : callback(200, [UserTransformer.userTransform(response)]);
    });
});
