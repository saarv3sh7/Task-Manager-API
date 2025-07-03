const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 86400 }); // 86400 seconds = 1 day
};

// register Controller - For User SignUp
exports.register = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const user = await User.create({name, email, password});
        const token = generateToken(user._id);
            res.status(201).json({user, token});
    }catch(err) {
        res.status(400).json({error: 'Email already exists'});
    }
};

// login Controller - For Logging In
exports.login = async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    const isMatch = user && await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = generateToken(user._id);
        res.json({user, token});
};