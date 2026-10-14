import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    ownerId: {
        type: mongoose.ObjectId,
        ref: 'Customers',
        required: [true, "Is necessary add owner this auto"],
    },
    model: {
        type: String,
        required: [true, "The model car is required"],
    },
    //year: {
    //    type: Number,
    //    required: [true, "Year of the car is required"],
    //},
    license: {
        type: String,
        required: [true, "License field is required"],
        unique: true,
    },
    //color: {
    //    type: String,
    //}, 

});

const Vehicle = mongoose.model('Vehicles', vehicleSchema);

export default Vehicle;