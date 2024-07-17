const Router = require('@koa/router')
const StadiumController = require('../controller/stadium.controller')
const router = new Router({ prefix: '/stadium' })
router.get('/list', StadiumController.list)

module.exports = router 