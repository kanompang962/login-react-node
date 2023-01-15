const jwt = require('jsonwebtoken');


exports.auth = (req, res, next) => {
    try {
        const token = req.headers["authtoken"];

        if (!token) {
            return res.status(400).send('no Token!!!');
        }

        const decoded = jwt.verify(token, 'jwtSecret');
        
        console.log('middleware', decoded );
        // req.user = decoded.user;
        next();

    } catch (err) {
        console.log(err);
        res.status(500).send("Token Invalid!!");
    }
}