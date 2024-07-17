const { NAME_AND_PASSWORD_IS_REQUIRED, USER_NAME_IS_EXISTS } = require("../error/errorTypes");
const userService = require("../service/user.service");


const verifyRegister = async (ctx, next) => {
    const { name, password } = ctx.request.body;
    // 校验有无用户名和密码
    if (!name || !password) {
        return ctx.app.emit('error', new Error(NAME_AND_PASSWORD_IS_REQUIRED), ctx)
    }
    // 校验是否重复
    const result = await userService.getUserInfoByName(name)

    if (result.length) {
        return ctx.app.emit('error', new Error(USER_NAME_IS_EXISTS), ctx)

    }

    await next();

};
module.exports = {
    verifyRegister
}