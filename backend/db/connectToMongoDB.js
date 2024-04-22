import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("Error Connecting to the DB", error.message);
    }
}


export default connectToMongoDB;