var User = require('../models/user');

exports.post = (function(req, callback) {
    var initUser = new User();

    initUser.name = req.query.name;

    initUser.save(function(err, user){
        console.log(err);
        (err) ? callback(true, err) : callback(false, user);
    });
});

exports.getById = (function(req, callback) {
    console.log("getById");
    
    User.findOne({_id: req.params.userId}, function(err, user){
        (err) ? callback(true, err) : callback(false, user);
    });
});

exports.get = (function(req, callback) {
    console.log("get");
    
    User.find({}, function(err, user){
        (err) ? callback(true, err) : callback(false, user);
    });
});
