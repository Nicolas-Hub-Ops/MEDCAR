import Customer from "../models/Customer.js";
import processSearch from "../utils/processSearch.js";

class customerService {
    static async getAll() {
        const customers = await Customer.find();
        return customers;
    };

    static async getByFilter(query) {
        const filter = processSearch(query, ['name', 'email']);
        const customers = await Customer.find(filter);
        return customers;
    }

    static async getById(id) {
        const customer = await Customer.findById(id);
        return customer;
    };

    static async create(data) {
        const customer = await Customer.create(data);
        return customer;
    };

    static async update(id, data) {
        const customer = await Customer.findByIdAndUpdate(id, data);
        return customer;
    };

    static async delete(id) {
        const customer = await Customer.findByIdAndDelete(id);
        return customer;
    };
};

export default customerService;