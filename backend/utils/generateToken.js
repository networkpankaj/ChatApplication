import jwt from 'jsonwebtoken';

const generateTokenAndCookie = (userid, res) => {
    const token = jwt.sign({userid}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });

    res.cookie('jwt', token, {
        httpOnly: true,   // prevent XSS attacks cross-site scripting attacks
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: "strict" ,// CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV === 'development'
    })

    // return token;
}

export default generateTokenAndCookie;