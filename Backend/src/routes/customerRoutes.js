import express from 'express';
import customerController from '../controllers/customerController.js';

const routes = express.Router();

routes.get('/customers', customerController.getAllCustomers);
routes.get('/customers/search', customerController.getCustomerByFilter);
routes.get('/customers/:id', customerController.getCustomerById);
routes.post('/customers', customerController.createCustomer);
routes.put('/customers/:id', customerController.updateCustomer);
routes.delete('/customers/:id', customerController.deleteCustomer);

export default routes;