const jwt = require('jsonwebtoken')
const { PRIVATE_KEY, PUBLIC_KEY } = require('../env')
// 生成token
const tokenGenerate = (payload) => {
    const result = jwt.sign(payload, PRIVATE_KEY, {
        expiresIn: '1d', //有效期一天
        algorithm: 'RS256',  //使用的算法
    })
    return result
}
// 解析token
const tokenParse = (token) => {
    const result = jwt.verify(token, PUBLIC_KEY, {
        algorithm: ['RS256']  //验证使用的算法
    })
    return result
}

module.exports = {
    tokenGenerate,
    tokenParse
}