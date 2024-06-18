import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'TrybeSmith API',
    description: 'An API to list and create products, create users and list orders',
  },
  host: 'localhost:3000',
};

const outputFile = './swagger.json';
const routes = ['../routers/index.ts'];

swaggerAutogen(outputFile, routes, doc);