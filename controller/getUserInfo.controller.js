const userService = require("../service/user.service");

class getUserInfoController {
    async getUserInfo(ctx) {
        ctx.body = await userService.getAvatarAndAmountByName(ctx.userInfo.name)
    }
}
module.exports = new getUserInfoController()