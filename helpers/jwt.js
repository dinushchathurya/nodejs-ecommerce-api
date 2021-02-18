const jwt  = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    return jwt({
        secret,
        algorithms: ['HS256']
    })
}

module.exports = authJwt;