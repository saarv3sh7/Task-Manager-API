// auth.js -> Protect Routes Using JWT
// This middleware checks if a user is logged in before allowing access to protected routes like /api/tasks.

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async(req, resizeBy, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id);
        next();
    } catch {
        resizeBy.status(401).json({message: 'Unauthorized'});
    }
};

module.exports = auth;