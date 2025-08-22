import swagger from '@fastify/swagger';
import fp from 'fastify-plugin';

export default fp(async (app) => {
  await app.register(swagger, {
    openapi: {
      info: {
        title: 'Fastify API',
        description: 'API documentation',
        version: '1.0.0',
      },
    },
  });
});
