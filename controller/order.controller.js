const orderService = require("../service/order.service");
const userServive = require('../service/user.service')
const { wrapperMiddleware } = require("../middleware/wrapper.middleware");
class OrderController {
    async create(ctx) {
        const { status, orderNo, stadiumId } = ctx.orderInfo
        const { id: userId } = ctx.userInfo
        const result = await orderService.create(status, orderNo, stadiumId, userId, status ? 15 : 0)
        if (result.insertId) {
            if (status) {
                ctx.body = orderNo
            } else {
                ctx.body = 'create order failed'
            }
        }
        ctx.status = 200;
        await wrapperMiddleware(ctx)
    }
    async finish(ctx) {
        const { orderNo } = ctx.orderInfo
        const { name, id } = ctx.userInfo
        const result = await orderService.finish(orderNo)
        if (result.affectedRows) {
            const [userInfo] = await userServive.getUserInfoByName(name)
            await userServive.updateUserAmount((+userInfo.amount - 15 * 100), id)
        }

        ctx.body = 'finish'
        ctx.status = 200;
        await wrapperMiddleware(ctx)
    }
    async list(ctx) {
        const { id } = ctx.userInfo
        const result = await orderService.list(id)
        ctx.body = result
        ctx.status = 200;
        await wrapperMiddleware(ctx)
    }
}
module.exports = new OrderController()