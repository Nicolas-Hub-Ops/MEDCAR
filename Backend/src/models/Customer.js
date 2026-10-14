import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        unique: true,
    },
    //telephone: {
    //    type: Number,
    //    required: [true, 'Telephone field is required'],
    //},
    //cpf: {
    //    type: String,
    //    required: [true, 'CPF field is required'],
    //    unique: true,
    //},
});

const Customer = mongoose.model('Customers', customerSchema);

export default Customer;