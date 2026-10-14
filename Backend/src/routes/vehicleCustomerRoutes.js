import express from "express";
import vehicleCustomerCotroller from "../controllers/vehicleCustomerController.js";

const routes = express.Router();

routes.post('/both', vehicleCustomerCotroller.createBoth);
routes.delete('/both/:id', vehicleCustomerCotroller.deleteBoth);

export default routes;