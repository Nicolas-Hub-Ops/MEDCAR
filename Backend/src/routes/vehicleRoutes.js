import express from "express";
import vehicleController from "../controllers/vehicleController.js";

const routes = express.Router();

routes.get('/vehicles', vehicleController.getAllVehicle);
routes.get('/vehicles/search', vehicleController.getVehicleByFilter);
routes.get('/vehicles/:id', vehicleController.getVehicleById);
routes.post('/vehicles', vehicleController.createVehicle);
routes.put('/vehicles/:id', vehicleController.updateVehicle);
routes.delete('/vehicles/:id', vehicleController.deleteVehicle);

export default routes;