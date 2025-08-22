import Scalar from '@scalar/fastify-api-reference';
import fp from 'fastify-plugin';

export default fp(async (app) => {
  await app.register(Scalar, {
    routePrefix: '/reference',
    configuration: {
      theme: 'kepler',
    },
  });
});
