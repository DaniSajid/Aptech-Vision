export const jwtVerify = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        return res.status(401).send({ message: "No token provided" });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }

        // Correctly assign the decoded user ID to req.userId
        req.userId = decoded.user_id;
        
        next();
    });
};
