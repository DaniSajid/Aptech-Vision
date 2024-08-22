import mongoose from "mongoose";

const connectDb = async () => {

    try {
        const con = await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log(`MongoDb connected: ${con.connection.host}`);
    } catch (error) {
        console.log("MongoDb connection failed:", error);
    }
}

export {connectDb};