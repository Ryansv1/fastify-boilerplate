// Must be placed right here, according to sentry docs.
import './lib/sentry';

import Fastify from 'fastify';
import env, { type Config } from './plugins/env';
import helmet from './plugins/helmet';
import scalar from './plugins/scalar';
import swagger from './plugins/swagger';
import rateLimit from './plugins/rate-limit';
import multipart from './plugins/multipart';
import healthcheck from './routes/healthcheck';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod';
import { HTTPErrorHandler } from './utils/http';
import z from 'zod';

declare module 'fastify' {
  interface FastifyInstance {
    config: Config;
  }
}

export async function AppFactory() {
  const app = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  });

  

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);
  app.withTypeProvider<ZodTypeProvider>();
  app.setErrorHandler(async function (err, request, reply) {
    await HTTPErrorHandler(this, err, request, reply);
  });


  app.register(helmet);
  app.register(env);
  app.register(swagger);
  app.register(scalar);
  app.register(multipart);
  app.register(rateLimit);

  app.register(healthcheck);

  const teste = z.object({
    teste: z.boolean(),
    dsadadas: z.string(),
    rosladjoqwj: z.number(),
  });
  app.withTypeProvider<ZodTypeProvider>().post(
    '/teste',
    {
      schema: {
        body: teste,
      },
    },
    () => {
      throw new Error('TSDASDASDASDAS');
    },
  );

  await app.ready();

  try {
    await app.listen({ port: Number(app.config.PORT) });
  } catch (err) {
    app.log.fatal(err);
    process.exit(1);
  }
}

AppFactory();
