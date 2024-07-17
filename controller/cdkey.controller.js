const cdkeyService = require("../service/cdkey.service")
const { wrapperMiddleware } = require("../middleware/wrapper.middleware");
class CdkeyController {
    async exchange(ctx) {

        const { cdkeyInfo, userInfo } = ctx
        await cdkeyService.updateCdkeyStatus(userInfo.id, cdkeyInfo.id)
        ctx.body = 'exchange'
        ctx.status = 200;
        await wrapperMiddleware(ctx)

    }
}
module.exports = new CdkeyController()