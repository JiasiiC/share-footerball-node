const connection = require('../sql')
class orderService {
    async create(status, orderNo, stadiumId, userId, amount) {
        const statement = 'INSERT INTO `order` (`status`,orderNo,stadiumId,userId,amount) VALUES (?,?,?,?,?);';
        const [result] = await connection.execute(statement, [status, orderNo, stadiumId, userId, amount])
        return result
    }
    async getOrderInfoByOrderno(orderNo) {
        const statement = 'SELECT * FROM `order` WHERE orderNo = ?;'
        const [result] = await connection.execute(statement, [orderNo])
        return result
    }
    async finish(orderNo) {
        const statement = 'UPDATE `order` SET status = ? WHERE orderNo = ?;'
        const [result] = await connection.execute(statement, [0, orderNo])
        return result
    }
    async list(id) {
        const statement = `SELECT  o.id, o.\`status\`, o.orderNo, o.amount, o.createAt, o.updateAt,
        JSON_OBJECT('id', s.id, 'name', s.name, 'address', s.address) stadium FROM \`order\` o 
        LEFT JOIN \`user\` u ON o.userId = u.id
        LEFT JOIN \`stadium\` s ON o.stadiumId = s.id
        WHERE userId = ?; `;
        const [result] = await connection.execute(statement, [id])
        return result
    };

}

module.exports = new orderService()