"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./lib/sentry");
// Must be placed right here, according to sentry docs.
const logger_1 = require("./lib/logger");
const env_1 = __importDefault(require("./plugins/env"));
const helmet_1 = __importDefault(require("./plugins/helmet"));
const scalar_1 = __importDefault(require("./plugins/scalar"));
const swagger_1 = __importDefault(require("./plugins/swagger"));
const fastify_1 = __importDefault(require("fastify"));
async function AppFactory() {
    const app = (0, fastify_1.default)({
        logger: true,
    });
    app.register(helmet_1.default);
    app.register(env_1.default);
    app.register(swagger_1.default);
    app.register(scalar_1.default);
    await app.ready();
    try {
        await app.listen({ port: Number(app.config.PORT) });
        logger_1.logger.info('API Running on port: ' + app.config.PORT);
    }
    catch (err) {
        logger_1.logger.fatal(err);
        process.exit(1);
    }
}
AppFactory();
//# sourceMappingURL=main.js.map