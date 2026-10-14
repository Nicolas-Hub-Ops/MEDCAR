import customerService from "../services/customerService.js";
import existsEntity from "../utils/validateEntity.js";

class customerController {
    static async getAllCustomers(req, res, next) {
        try {
            const customers = await customerService.getAll();
            existsEntity(res, customers, 'List of customers');
        } catch (error) {
            next(error);
        };
    };

    static async getCustomerById(req, res, next) {
        try {
            const customer = await customerService.getById(req.params.id);
            existsEntity(res, customer, 'Customer by id found');
        } catch (error){
            next(error);
        };
    };

    static async getCustomerByFilter(req, res, next) {
        try {
            const customers = await customerService.getByFilter(req.query);
            existsEntity(res, customers, 'Customer by filter found');
        } catch (error) {
            next(error);
        };
    };

    static async createCustomer(req, res, next) {
        try {
            const customer = await customerService.create(req.body);
            res.status(201).json({
                status: 201,
                message: 'Customer created successfully',
                id: customer._id,
                customer,
            });
        } catch (error) {
            next(error);
        };
    };

    static async updateCustomer(req, res) {
        try {
            const id = req.params.id;
            const customer = await customerService.update(id, req.body);
            existsEntity(res, customer, 'Customer updated sucessfully');
        } catch (error) {
            next(error);
        };
    };

    static async deleteCustomer(req, res) {
        try {
            const id = req.params.id;
            const customer = await customerService.delete(id);
            existsEntity(res, customer, 'Customer deleted successfully');
        } catch (error) {
            next(error);
        };
    };
};

export default customerController;