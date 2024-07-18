const bcrypt = require('bcryptjs')
// 加密
const passwordEncrypt = async (password) => {
    const result = await bcrypt.hash(password, 10)
    return result
}
// 解密
const passwordDecrypt = async (password, hash) => {
    const result = await bcrypt.compare(password, hash)
    return result
}

module.exports = {
    passwordEncrypt,
    passwordDecrypt
}