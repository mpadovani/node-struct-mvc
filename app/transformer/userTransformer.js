exports.userTransform = (function(user) {
    return {
        id: user._id,
        name: user.name
    }
});