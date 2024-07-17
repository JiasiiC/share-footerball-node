const { AMOUNT_IS_INVALID } = require("../error/errorTypes")
const { orderNoGenerate } = require("../utils/orderNoHandlers")

const verifyRecharge = async (ctx, next) => {
    const { amount } = ctx.request.body
    if (!amount) {
        return ctx.app.emit("error", new Error(AMOUNT_IS_INVALID), ctx)
    }
    const status = 1
    const orderNo = orderNoGenerate()
    const orderInfo = {
        amount,
        status,
        orderNo
    }
    ctx.orderInfo = orderInfo
    await next()
}

module.exports = { verifyRecharge }