import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import errorHandler from '../utils/error.js';

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password || email.trim() === '' || password.trim() === '' || username.trim() === '') {
        next(errorHandler(400, 'All fields are required'));
    }

    const existingUser = await User.findOne({email});
    if(existingUser) {
        next(errorHandler(400, 'User already exists'));
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });
    
    try {
        await newUser.save();
        res.json({
            message: 'User created successfully',
        });
    } catch (error) {
        next(error);
    }
}

export const signin = async (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password || email.trim() === '' || password.trim() === '') {
        next(errorHandler(400, 'All fields are required'));
    }

    try {
        const validUser = await User.findOne({email});
        if(!validUser) {
            return next(errorHandler(400, 'User not found'));
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) {
             return next(errorHandler(400, 'Invalid credentials'));
        } 

        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);

        const {password: pass, ...rest} = validUser._doc;
        res.status(200).cookie('access_token', token, {httpOnly: true}).json({
            userData: rest
        });
    } catch (error) {
        next(error);
    }
}
