import express from 'express';
import customerRoutes from './customerRoutes.js';
import vehicleRoutes from './vehicleRoutes.js';
import vehicleCustomerRoutes from './vehicleCustomerRoutes.js';

const routes = (app) => {
    app.route('/')
        .get((req, res) => {
            res.status(200).send('API NodeJS Express MongoDB running...')
        })

    app.use(express.json(),
    customerRoutes,
    vehicleRoutes,
    vehicleCustomerRoutes,
    );
};

export default routes;