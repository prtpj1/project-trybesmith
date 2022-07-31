import express from 'express';
import routerProcuts from './routers/products.router';

const app = express();

app.use(express.json());

app.use(routerProcuts);

export default app;
