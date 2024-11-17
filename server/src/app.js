const express = require("express");
require('dotenv').config();
const app = express();
const User = require("./models/user");
const JWT_SECRET = "abcdefghigdhfaskdj23615714";
const cors = require("cors");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
const jwt  = require("jsonwebtoken")
//dbpassword = "Iop890@iop#$"
app.post("/auth/google", async (req, res) => {
    try {
        console.log(req.body);
        const { email, name, profilePic } = req.body;
        let user = await User.findOne({ where: { email } });
        if (!user) {
            user = await User.create({ email, name, profilePic });
        }
        const token = jwt.sign(
            { id: user.id, email: user.email, name: user.name },
            JWT_SECRET,
            { expiresIn: '30d' }
        );
        res.status(200).json({
            token: token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "internal server error",
        })
    }

});

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }
        req.userId = decoded.id;
        next();
    });
};

const getUserByToken = async (req, res) => {
    try {
        const user = await User.findOne({
            where: { id: req.userId },
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({
            id: user.id,
            username: user.username,
            email: user.email,
            name: user.name,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};
app.get('/auth/user', verifyToken, getUserByToken);
app.listen(3000, () => {
    console.log("serer is running")
})