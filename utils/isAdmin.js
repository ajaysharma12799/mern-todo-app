module.exports = async (req, res, next) => {
    const user = req.user;
    try {
        if(user.role !== 1) return res.json({msg: "You are not admin, Access Denied"});
        next();
    } catch (error) {
        res.status(401).json({msg: "Token is not valid"});
    }
}