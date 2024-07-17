const { CDKEY_IS_INVALID } = require("../error/errorTypes")
const cdkeyService = require("../service/cdkey.service")

const verifyCdkey = async (ctx, next) => {
    const { code } = ctx.request.body
    if (!code) {
        return ctx.app.emit('error', new Error(CDKEY_IS_INVALID), ctx)
    }
    const result = await cdkeyService.getCdkeyInfoByCode(code)
    if (!result.length) {
        return ctx.app.emit('error', new Error(CDKEY_IS_INVALID), ctx)
    }
    const [cdkeyInfo] = result
    if (!cdkeyInfo.status) {
        return ctx.app.emit('error', new Error(CDKEY_IS_INVALID), ctx)
    }
    ctx.cdkeyInfo = cdkeyInfo
    await next()
}
module.exports = { verifyCdkey }