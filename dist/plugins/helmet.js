"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = __importDefault(require("@fastify/helmet"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
exports.default = (0, fastify_plugin_1.default)(async (app) => {
    await app.register(helmet_1.default, {
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'"],
                styleSrc: ["'self'", 'https:'],
                imgSrc: ["'self'", 'data:', 'https:'],
                objectSrc: ["'none'"],
                upgradeInsecureRequests: [],
            },
        },
        referrerPolicy: { policy: 'no-referrer' },
        hidePoweredBy: true,
        xssFilter: true,
        noSniff: true,
        frameguard: { action: 'deny' },
    });
});
//# sourceMappingURL=helmet.js.map