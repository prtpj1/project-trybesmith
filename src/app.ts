import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import routers from './routers';

const app = express();

app.use(express.json());

app.use(routers);
app.use(errorMiddleware);

export default app;
