const express = require('express')
const router = express.Router()

const { logon, hello } = require('../controllers/main')

const authenticationMiddle = require ('../middleware/auth')

router.route('/hello').get(authenticationMiddle, hello)
router.route('/logon').post(logon)

module.exports = router