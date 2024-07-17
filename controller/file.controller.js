const fs = require('node:fs')
const { wrapperMiddleware } = require("../middleware/wrapper.middleware");
class FileController {
    async read(ctx) {
        const { filename, mimetype } = ctx.fileInfo
        ctx.set('Content-type', mimetype)
        ctx.body = fs.createReadStream(`./uploads/${filename}`)

    }
}
module.exports = new FileController()