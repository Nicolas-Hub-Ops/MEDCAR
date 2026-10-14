import customerService from "../services/customerService.js";
import vehicleService from "../services/vehicleService.js";
import vehicleCustomerService from "../services/vehicleCustomerService.js";
import existsEntity from "../utils/validateEntity.js";


class vehicleCustomerCotroller {
    static async createBoth(req, res, next) {
        try {
            const customer = await customerService.create(req.body.customer);
            const vehicleData = {
                ...req.body.vehicle,
                ownerId: customer._id,
            };
            const vehicle = await vehicleService.create(vehicleData);
            res.status(201).json({
                status: 201,
                vehicle,
            });
        } catch (error) {
            next(error);
        };
    };

    static async deleteBoth(req, res, next) {
        try {
            const deleteBoth = await vehicleCustomerService.deleteCustomerVehicle(req.params.id);
            existsEntity(res, deleteBoth, "Customer and vehicles deleted")
        } catch (error) {
            next(error);
        };
    };
}

export default vehicleCustomerCotroller;