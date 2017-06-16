var UserService = require('../services/userService.js');

exports.post = function(req, res) {
    
    //console.log(req.headers.authorization);
    
    UserService.post(req, function(status, response) {
        res.status(status).json(response)
        res.end();
    });
};

exports.getById = function(req,res) {    
    UserService.getById(req, function(status, response) {
        res.status(status).json(response)
        res.end();
    });
};

exports.get = function(req,res) {   
    UserService.get(req, function(status, response) {
        res.status(status).json(response)
        res.end();
    });
    
};