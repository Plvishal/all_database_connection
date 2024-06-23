import express from 'express';
import { createAuthor, getAuthor } from '../controllers/author.controller.js';

const authorRoutes = express.Router();

authorRoutes.route('/mysql').get(getAuthor);
authorRoutes.route('/newAuthor').post(createAuthor);

export default authorRoutes;
