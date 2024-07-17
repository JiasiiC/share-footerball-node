const StadiumService = require("../service/stadium.service");

class StadiumController {
    async list(ctx, next) {
        const result = await StadiumService.list()
        ctx.body = result
        console.log(result);
        await next()
    }
};

module.exports = new StadiumController();