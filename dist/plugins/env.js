"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const zod_1 = __importDefault(require("zod"));
const envSchema = zod_1.default.object({
    NODE_ENV: zod_1.default
        .enum(['development', 'production', 'test'])
        .default('development'),
    PORT: zod_1.default.string().default('3000'),
});
exports.default = (0, fastify_plugin_1.default)(async (app) => {
    const parsed = envSchema.parse(process.env);
    app.decorate('config', parsed);
});
//# sourceMappingURL=env.js.map