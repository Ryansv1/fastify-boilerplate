"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
exports.default = (0, fastify_plugin_1.default)(async (app) => {
    await app.register(swagger_1.default, {
        openapi: {
            info: {
                title: 'Fastify API',
                description: 'API documentation',
                version: '1.0.0',
            },
        },
    });
    await app.register(swagger_ui_1.default, {
        routePrefix: '/docs',
        uiConfig: { docExpansion: 'list' },
    });
});
//# sourceMappingURL=swagger.js.map