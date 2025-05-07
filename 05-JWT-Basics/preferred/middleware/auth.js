const jwt = require('jsonwebtoken')

const authenticationMiddle = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json ({msg: 'No Token Given'})
      }

    const token = authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { username } = decoded
        req.user = {username}
        next()
    
    } catch (error){
        return res.status(401).json({ msg: 'Not Authorized To Have Access'})
    }
}
module.exports = authenticationMiddle