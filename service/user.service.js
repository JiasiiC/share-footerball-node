const connection = require('../sql')

class UserService {
    // 获取用户信息
    async getUserInfoByName(name) {
        const statement = 'SELECT * FROM `user` WHERE `name` = ?;'
        const [result] = await connection.execute(statement, [name])
        return result
    }
    async getAvatarAndAmountByName(name) {
        const statement = 'SELECT avatar,amount FROM `user` WHERE `name` = ?;'
        const [result] = await connection.execute(statement, [name])
        return result
    }
    // 注册
    async register(name, password) {
        const statement = 'INSERT INTO `user`(`name`,`password`) VALUES (?,?);'
        const [result] = await connection.execute(statement, [name, password])
        return result
    }
    // 更新余额
    async updateUserAmount(amount, id) {
        const statement = 'UPDATE `user` SET amount = ? WHERE id = ?;'
        const [result] = await connection.execute(statement, [amount, id])
        return result
    }
    async updateUserAvatar(avatar, id) {
        const statement = 'UPDATE `user` SET avatar = ? WHERE id = ?;'
        const [result] = await connection.execute(statement, [avatar, id])
        return result
    }
}

module.exports = new UserService()