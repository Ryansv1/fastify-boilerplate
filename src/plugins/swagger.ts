import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
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

  await app.register(swaggerUI, {
    routePrefix: '/docs',
    uiConfig: { docExpansion: 'list' },
  });
});
