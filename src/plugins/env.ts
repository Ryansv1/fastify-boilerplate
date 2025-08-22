import fp from 'fastify-plugin';
import z from 'zod';

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.string().default('3000'),
});

export default fp(async (app) => {
  const parsed = envSchema.parse(process.env);
  app.decorate('config', parsed);
});

export type Config = z.infer<typeof envSchema>;
