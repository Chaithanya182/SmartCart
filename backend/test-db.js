import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async () => {
    try {
        console.log("----------------------------------------");
        console.log("Testing Connection...");
        console.log("URI:", process.env.MONGODB_URI.split('@')[1]); // Log only the host part for privacy/sanity

        await mongoose.connect(process.env.MONGODB_URI)

        console.log("----------------------------------------");
        console.log("SUCCESS: DB Connected!");
        console.log("----------------------------------------");
        process.exit(0);
    } catch (error) {
        console.log("----------------------------------------");
        console.log("FAILURE: DB Connection Failed");
        console.log("Error Name:", error.name);
        console.log("Error Message:", error.message);
        if (error.cause) console.log("Cause:", error.cause);
        console.log("----------------------------------------");
        process.exit(1);
    }
}

connectDB();
