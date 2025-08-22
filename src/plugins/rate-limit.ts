import fp from 'fastify-plugin';
import fastifyRateLimit from '@fastify/rate-limit';

export default fp(async (app) => {
  await app.register(fastifyRateLimit, {
    global: true,
    max: 50,
    timeWindow: '1 minute',
  });
});
