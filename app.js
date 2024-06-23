import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import userRouter from './routes/user.routes.js';
import authorRoutes from './routes/author.routes.js';

const app = express();

app.use('/connection', userRouter);
app.use('/connection', authorRoutes);

export default app;
