import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger/swagger.json';
import routers from './routers';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use(routers);
app.use(errorMiddleware);

export default app;
