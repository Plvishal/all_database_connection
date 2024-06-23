import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import userRouter from './routes/user.routes.js';

const app = express();

app.use('/api', userRouter);

export default app;
