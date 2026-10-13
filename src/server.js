import express from "express";
import {config} from "dotenv";
import movieRoutes from "./routes/movieRoutes.js";
import {connectDB, disconnectDB} from "./config/db.js";
config();

try{
    if(!process.env.DATABASE_URL){
        throw new Error("DATABASE_URL is not defined");
    }
    connectDB();
}catch(error){
    disconnectDB();
    console.log("error connecting to database", error);
}

const app = express();
const port = 5001;

app.get("/", (req, res) => {
    res.send("Route for home");
})

app.use("/api/movie", movieRoutes);

app.listen(port, () => {
    console.log('server is running on port : ', port);
});
