const fileService = require("../service/file.service")

const verifyRead = async (ctx, next) => {
    const { filename } = ctx.request.params
    const [fileInfo] = await fileService.getFileInfoByFilename(filename)
    ctx.fileInfo = fileInfo
    await next()
}
module.exports = { verifyRead }