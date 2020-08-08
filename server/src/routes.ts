import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = express.Router();
const ClassesControllers = new ClassesController();
const ConnectionControllers = new ConnectionController();


routes.get('/classes', ClassesControllers.index);
routes.post('/classes', ClassesControllers.create);

routes.get('/connections', ConnectionControllers.index);
routes.post('/connections', ConnectionControllers.create);

export default routes;