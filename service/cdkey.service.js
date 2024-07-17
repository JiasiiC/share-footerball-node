const connection = require('../sql')
class cdkeyService {
    async getCdkeyInfoByCode(code) {
        const statement = 'SELECT * FROM cdkey WHERE code = ?;';
        const [result] = await connection.execute(statement, [code])
        return result
    }
    async updateCdkeyStatus(userId, id) {
        const statement = 'UPDATE cdkey SET status = ?,userId = ? WHERE id = ?;';
        await connection.execute(statement, [0, userId, id])
    }

}

module.exports = new cdkeyService()