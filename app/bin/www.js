"use strict";

const app = require("../app");
const log = require("../src/config/log");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    log.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});