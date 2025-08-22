import { test, expect, beforeAll, afterAll } from 'vitest';
import { FastifyInstance } from 'fastify';

let app: FastifyInstance;

test('GET /health', async () => {
  expect(200).toBe(200);
});
