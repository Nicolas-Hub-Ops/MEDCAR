import vehicleService from "../services/vehicleService.js";
import existsEntity from "../utils/validateEntity.js";

class vehicleController {
    static async getAllVehicle(req, res, next) {
        try {
            const vehicles = await vehicleService.getAll();
            existsEntity(res, vehicles, 'List Vehicles');
        } catch (error) {
            next(error);
        };
    };

    static async getVehicleById(req, res, next) {
        try {
            const vehicles = await vehicleService.getById(req.params.id);
            existsEntity(res, vehicles, 'Vehicle find by id');
        } catch (error) {
            next(error);
        };
    };

    static async getVehicleByFilter(req, res, next) {
        try {
            const vehicle = await vehicleService.getByFilter(req.query);
            existsEntity(res, vehicle, 'Vehicle find by filter');
        } catch (error) {
            next(error);
        };
    };


    static async createVehicle(req, res, next) {
        try {
            const vehicle = await vehicleService.create(req.body);
            res.status(201).json({
                status: 201,
                message: 'Vehicle created successfully',
                vehicle,
            });      
        } catch (error) {
            next(error);
        };
    };

    static async updateVehicle(req, res, next) {
        try {
            const id = req.params.id;
            const vehicle = await vehicleService.update(id, req.body);
            existsEntity(res, vehicle, 'Vehicle updated successfully');
        } catch (error) {
            next(error);
        };
    };

    static async deleteVehicle(req, res, next) {
        try {
            const id = req.params.id;
            const vehicle = await vehicleService.deleteById(id);
            existsEntity(res, vehicle, 'Vehicle deleted successfully')
        } catch (error) {
            next(error);
        };
    };
};

export default vehicleController;