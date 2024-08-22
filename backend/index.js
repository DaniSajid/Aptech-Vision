import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDb } from './models/db/db.js';
import router from './routes/user.route.js';
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

connectDb().then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((error) => {
    console.log("MongoDb server connection failed:", error);
})
app.use("/api/v1/user",router);