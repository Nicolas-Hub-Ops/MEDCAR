import Vehicle from "../models/Vehicle.js";
import processSearch from "../utils/processSearch.js";

//function processSearch(query) {
//    try {
//        const { manufacturer, model, year, license, color } = query;
//        const objectFilter = {};
//        
//        if(manufacturer) objectFilter.manufacturer = { $regex: manufacturer, $options: "i" };
//        if(model) objectFilter.model = { $regex: model, $options: "i" };
//        if(year) objectFilter.year = { $regex: year, $options: "i" };
//        if(license) objectFilter.license = { $regex: license, $options: "i" };
//        if(color) objectFilter.color = { $regex: color, $options: "i" };
//
//        return objectFilter;
//    } catch (error) {
//        console.log(error);
//    };
//};

class vehicleService {
    static async getAll() {
        const vehicles = await Vehicle
            .find()
            .populate('ownerId');
        return vehicles;
    };

    static async getByFilter(query) {
        const filter = processSearch(query, ['model', 'year', 'license', 'color']);
        const vehicles = await Vehicle
            .find(filter)
            .populate('ownerId');
        return vehicles;
    };

    static async getById(id) {
        const vehicle = await Vehicle
            .findById(id)
            .populate('ownerId');    
        return vehicle;
    };

    static async create(data) {
        const vehicle = await Vehicle.create(data);
            await vehicle.populate('ownerId');
        return vehicle;
    };

    static async update(id, data) {
        const vehicle = await Vehicle.findByIdAndUpdate(id, data);
        return vehicle;
    };

    static async deleteById(id) {
        const vehicle = await Vehicle.findByIdAndDelete(id);
        return vehicle;
    };

    static async deleteByFilter(data) {
        const vehicle = await Vehicle.deleteMany(data);
        return vehicle;
    };
};

export default vehicleService;