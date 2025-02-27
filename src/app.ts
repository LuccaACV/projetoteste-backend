import fastify from "fastify";
import { appRoutes } from "./http/routes";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";


export const app = fastify()

// Registrar o Swagger
app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Acomodações API',
        description: 'API para gerenciar acomodações.',
        version: '1.0.0',
      },
    },
  });
  
  // Registrar o Swagger UI
  app.register(fastifySwaggerUi, {
    routePrefix: '/documentation', // URL onde a documentação estará disponível
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    staticCSP: true,
    transformSpecification: (swaggerObject, request, reply) => swaggerObject,
    transformSpecificationClone: true,
  });


  app.register(appRoutes)