"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = healthcheck;
async function healthcheck(app) {
    app.get('/health', async () => {
        return { status: 'ok' };
    });
}
//# sourceMappingURL=healthcheck.js.map