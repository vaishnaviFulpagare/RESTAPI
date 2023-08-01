const jwt =require("jsonwebtoken");

module.exports=(req,res,next)=>{

    const token = req.header("auth-token");

    if (!token) return res.Status(401).send("Access Denied")
    try {
        const verified = jwt.verify(token,process.env.Token_secret)
        res.userExist = jwt.verified

        next();

    } catch (error) {
        res.Status(400).send("Invalid token")
    }


}