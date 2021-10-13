const UserModel = require("../models/User.model");

module.exports = async (req, res, next) => {
    const requestUser = req.user;
    try {
        let user = await UserModel.findById(requestUser.id);
        console.log(user);
        if(user.role !== 1) return res.json({msg: "You are not admin, Access Denied"});
        next();
    } catch (error) {
        res.status(401).json({msg: "Token is not valid"});
    }
}