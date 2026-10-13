import express from "express";
import {config} from "dotenv";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes.js";
import {connectDB} from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
config();
const app = express();

try{
    if(!process.env.DATABASE_URL){
        throw new Error("DATABASE_URL is not defined");
    }
    connectDB();
}catch(error){
    // disconnectDB();
    console.log("error connecting to database", error);
}

app.use(express.json());
app.use(cors({
    origin : "http://localhost:5137",
}));
app.use("/api/movie", movieRoutes);
app.use("/api/user", authRouter);
const port = 5001;

app.get("/", (req, res) => {
    res.send("Route for home");
})

app.listen(port, () => {
    console.log('server is running on port : ', port);
});
