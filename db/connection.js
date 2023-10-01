import mongoose from "mongoose";
import dotenv from 'dotenv';

const connect = () => {
    dotenv.config();
    // console.log(process.env.DB_URI);
    mongoose.connect(process.env.DB_URI);
    const db = mongoose.connection;
    db.on('error', (error) => {
        console.log(`Database connection error due to ${error}`)
    });

    db.once('open', () => {
        console.log('Database connected successfully!')
    });
}

export { connect };