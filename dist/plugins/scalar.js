"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_api_reference_1 = __importDefault(require("@scalar/fastify-api-reference"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
exports.default = (0, fastify_plugin_1.default)(async (app) => {
    await app.register(fastify_api_reference_1.default, {
        routePrefix: '/reference',
        configuration: {
            theme: 'kepler',
        },
    });
});
//# sourceMappingURL=scalar.js.map