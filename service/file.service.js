const connection = require('../sql')
class fileService {
    async getFileInfoByFilename(filename) {
        const statement = 'SELECT * FROM file WHERE filename=?;';
        const [result] = await connection.execute(statement, [filename])
        return result
    }
}
module.exports = new fileService()