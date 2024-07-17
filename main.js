const app = require('./app.js');
const { APP_PORT, APP_HOST } = require('./env.js');
app.listen(APP_PORT, () => {
    console.log(`server start at ${APP_HOST}:${APP_PORT}`);
}) 