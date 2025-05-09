
const jwt = require('jsonwebtoken')
const { BadrequestError } = require('../errors')

const login = async (req, res) =>{
    const {username, password} = req.body
    if(!username || !password){
    throw new BadrequestError('Please Provide Email and Password')
    }

    const id = new Date().getDate()

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'30d'})

//  Mongoose Required Validation Once The Database has introduced; however, that is not done here
// If the username has not been provided, I need you to send another response.
    res.status(200).json({msg: 'user created', token})
}

const dashboard = async (req, res) => {
   console.log(req.user)
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({
        msg: `Hello, ${req.user.username}`, 
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
 })
}

module.exports = {
    login, dashboard,
}

//Json webtoken is the way to exchange information between two parties
//If the token passes the validation it means that it is the token sent to the client
//http is stateless, so it does not remeber anythig that was previously sent by the same client
//Header, payload, token, signature