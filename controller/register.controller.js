const { wrapperMiddleware } = require("../middleware/wrapper.middleware");
const userService = require("../service/user.service");
const { passwordEncrypt } = require("../utils/passwordHandlers");

class RegisterController {
    async register(ctx, next) {
        const { name, password } = ctx.request.body
        // 加密插入数据库
        const passwordEncrypted = await passwordEncrypt(password)
        const result = await userService.register(name, passwordEncrypted)
        ctx.body = 'register'
        ctx.status = 200;
        await wrapperMiddleware(ctx)
    }
}

module.exports = new RegisterController()