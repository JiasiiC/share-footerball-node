
const { wrapperMiddleware } = require("../middleware/wrapper.middleware");
const { tokenGenerate } = require("../utils/tokenHandlers")

class LoginController {
    async login(ctx) {
        const { userInfo: { id, name, amount, avatar } } = ctx
        const token = tokenGenerate({ id, name, amount })

        ctx.body = {
            id, name, amount, token, avatar
        }
        ctx.status = 200;
        await wrapperMiddleware(ctx)
    }
}
module.exports = new LoginController()