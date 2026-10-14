import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGO_URI;

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB successfully');
        return mongoose.connection;
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
        console.log(error)
    }
};

export default connect;