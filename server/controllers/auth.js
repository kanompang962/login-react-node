exports.register = async(req,res)=>{
    try {
        res.send(req.body.username)
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