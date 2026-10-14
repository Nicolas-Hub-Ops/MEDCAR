import Vehicle from "../models/Vehicle.js";
import Customer from "../models/Customer.js";

class vehicleCustomerService {
    static async deleteCustomerVehicle(customerId) {
        const vehicle = await Vehicle.deleteMany({
            ownerId: customerId,
        });
        const customer = await Customer.findByIdAndDelete(customerId);
        const objRes = {
            customer,
            vehicle
        }
        return objRes;

    };
};

export default vehicleCustomerService;