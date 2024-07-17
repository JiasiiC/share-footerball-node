
const connection = require('../sql')
class rechargeService {
    async recharge(amount, orderNo, userId, status) {
        const statement = 'INSERT INTO recharge (amount,orderNo,userId,status) VALUES (?,?,?,?);'
        const [result] = await connection.execute(statement, [amount, orderNo, userId, status])
        return result
    }

}
module.exports = new rechargeService()
