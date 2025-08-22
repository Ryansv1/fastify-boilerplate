import {
  FastifyError,
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from 'fastify';
import { hasZodFastifySchemaValidationErrors } from 'fastify-type-provider-zod';
import { DateTime } from 'luxon';

export function HTTPErrorHandler(
  app: FastifyInstance,
  err: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const requestId = request.id;
  const timestamp = DateTime.now().toISO();
  const path = request.url;
  const method = request.method;

  let statusCode = 500;
  let identifier = 'INTERNAL_SERVER_ERROR';
  let description = 'Erro interno no servidor';
  let details: any = {};

  if (hasZodFastifySchemaValidationErrors(err)) {
    statusCode = 400;
    identifier = 'VALIDATION_ERROR';
    description = 'Validation Failed';
    details = {
      errors: {
        issues: err.validation,
        path: err.validationContext,
      },
    };
  } else if (err instanceof Error) {
    identifier = 'UNHANDLED_EXCEPTION';
    description = err.message;
    details = {
      name: err.name,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    };
  }

  app.log.error({
    requestId,
    identifier,
    description,
    statusCode,
    path,
    method,
    details,
  });

  return reply.status(statusCode).send({
    statusCode,
    identifier,
    description,
    timestamp,
    path,
    method,
    details,
  });
}
