const jwt = require('jsonwebtoken')

const logon = async (req, res) => {
    const { username, password} = req.body

    if(!username || !password){
        return res.status(400).json({msg: 'Please Provide A Correct Username and Password'})
    }

    const token = jwt.sign({username}, process.env.JWT_SECRET, {
        expiresIn: '24h'
    })
     res.status(200).json({msg: 'User Created', token})
}

const hello = async (req, res) => {
    res.status(200).json({
        msg:`Welcome ${req.user.username}`,
    })
}

module.exports = {
    logon,
    hello,
}