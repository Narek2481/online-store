const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const ApiError = require("../error/ApiError");
const { User, Basket } = require("../models/models");

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: "24h" }
    );
}

class UserController {
    async registration(req, res, next) {
        console.log(1111111);
        const { email, password, role } = req.body;
        if (!email || !password) {
            return next(ApiError.bedRequest("Invalid email or password"));
        }

        const candidate = await User.findOne({
            where: { email }
        });

        if (candidate) {
            return next(ApiError.bedRequest("user with this email exists"));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({
            email,
            role,
            password: hashPassword
        });

        const basket = await Basket.create({ userId: user.id });
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({ token });
    }
    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: {
                email
            }
        });

        if (!user) {
            return next(ApiError.internal("No user found with this email"))
        }
        console.log(user, user.password);
        let comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal("Entered incorrect password"))
        }
        const token = await generateJwt(user.id, user.email, user.role)
        return res.json({ token });
    }
    async check(req, res, next) {
        const token = generateJwt(req.user.id,req.user.email,req.user.role)
        res.json({message:"OK"})
    }
}

module.exports = new UserController();