const rechargeService = require("../service/recharge.service");
const userService = require("../service/user.service");
const { wrapperMiddleware } = require("../middleware/wrapper.middleware");
class RechargeController {
    async recharge(ctx) {
        const { id: userId, name } = ctx.userInfo
        const { amount, orderNo, status } = ctx.orderInfo

        const result = await rechargeService.recharge(amount, orderNo, userId, status)
        console.log(result.insertId);
        if (result.insertId) {
            if (status) {
                const [userInfo] = await userService.getUserInfoByName(name)
                console.log(userInfo);
                await userService.updateUserAmount(+userInfo.amount + amount, userId)
                ctx.body = '充值成功'
            } else {
                ctx.body = '充值失败'
            }

        }
        ctx.status = 200;
        await wrapperMiddleware(ctx)
    }

}
module.exports = new RechargeController()