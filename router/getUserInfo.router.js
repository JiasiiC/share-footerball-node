const Router = require('@koa/router')
const { verifyAuth } = require('../middleware/auth.middleware')
const getUserInfoController = require('../controller/getUserInfo.controller')
const router = new Router({ prefix: '/getUserInfo' })
router.get('/', verifyAuth, getUserInfoController.getUserInfo)
module.exports = router