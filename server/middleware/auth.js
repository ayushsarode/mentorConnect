const jwt = require('jsonwebtoken');

const tokenAuth = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded.user;
        next();
    } catch (err) {
        return res.status(401).json({ msg: 'Token is not valid' });
    }
};

const mentorAuth = (req, res, next) => {
    if (req.user && req.user.role === 'mentor') {
        next();
    } else {
        return res.status(403).json({ msg: 'Access denied. Mentor role required.' });
    }
};

const menteeAuth = (req, res, next) => {
    if (req.user && req.user.role === 'mentee') {
        next();
    } else {
        return res.status(403).json({ msg: 'Access denied. Mentee role required.' });
    }
};

module.exports = {
    tokenAuth,
    mentorAuth,
    menteeAuth
};