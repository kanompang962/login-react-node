const bcrypt = require('bcryptjs')
const User = require('../models/User')



exports.register = async(req,res)=>{
    try {
        // check user
        const {username, password} = req.body;
        var user = await User.findOne({username});
        if (user) {
            return res.status(400).send("User Already exists");
        }
        const salt = await bcrypt.genSalt(10);
        user = new User({
            username,
            password,
        });

        // Encypt
        user.password = await bcrypt.hash(password,salt);
        await user.save();
        res.send('Register Success !!!');

    } catch (err) {
        console.log(err)
        res.stayus(500).send("Server Error!")
    }
}

exports.listUser = async(req,res)=>{
    try {
        res.send("List user (GET)")

    } catch (err) {
        console.log(err)
        res.stayus(500).send("Server Error!")
    }
}

exports.editUser = async(req,res)=>{
    try {
        res.send("Edit user (PUT)")

    } catch (err) {
        console.log(err)
        res.stayus(500).send("Server Error!")
    }
}

exports.deletetUser = async(req,res)=>{
    try {
        res.send("Remove user (DELETE)")

    } catch (err) {
        console.log(err)
        res.stayus(500).send("Server Error!")
    }
}