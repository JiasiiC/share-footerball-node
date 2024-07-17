const { TOKEN_IS_INVALID } = require("../error/errorTypes");
const { tokenParse } = require("../utils/tokenHandlers");

const verifyAuth = async (ctx, next) => {

    const { authorization } = ctx.request.header
    if (!authorization) {
        return ctx.app.emit("error", new Error(TOKEN_IS_INVALID), ctx)
    }
    const token = authorization.split(' ')[1]
    let userInfo = null
    try {
        userInfo = tokenParse(token)
    } catch (error) {
        return ctx.app.emit("error", new Error(TOKEN_IS_INVALID), ctx)
    }
    ctx.userInfo = userInfo
    await next()
}
module.exports = {
    verifyAuth
}
