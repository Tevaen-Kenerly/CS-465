const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    const header = req.headers.authorization;

    if (!header) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }

    const token = header.split(' ')[1];

    try {

        jwt.verify(token, 'MY_SECRET_KEY');

        next();

    } catch {

        return res.status(401).json({
            message: 'Invalid Token'
        });

    }

};

module.exports = auth;