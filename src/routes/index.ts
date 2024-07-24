import express from 'express';
import languageRoute from './test1.routes';
const routes = express.Router();
 
routes.use('/', languageRoute)

export default routes;