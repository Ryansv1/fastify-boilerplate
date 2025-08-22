import fastifyHelmet from '@fastify/helmet';
import fp from 'fastify-plugin';

export default fp(async (app) => {
  await app.register(fastifyHelmet, {
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
    prefix: '/api',
  });
});
