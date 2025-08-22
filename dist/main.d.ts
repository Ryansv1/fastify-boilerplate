import './lib/sentry';
import { type Config } from './plugins/env';
declare module 'fastify' {
    interface FastifyInstance {
        config: Config;
    }
}
//# sourceMappingURL=main.d.ts.map