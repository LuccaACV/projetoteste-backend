import fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./http/routes";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

export const app = fastify()

app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Acomodações API',
      description: 'API para gerenciar acomodações.',
      version: '1.0.0',
    },
  },
});

app.register(fastifySwaggerUi, {
  routePrefix: '/documentation',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false,
  },
  staticCSP: true,
  transformSpecification: (swaggerObject, request, reply) => swaggerObject,
  transformSpecificationClone: true,
});

app.register(appRoutes)