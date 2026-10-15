import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import authRouter from "./routes/authRoutes.js";
import addToWatchRouter from "./routes/addToWatchListRoutes.js";
import { authenticateToken } from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";

config();

const app = express();
const port = 5001;

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "https://backendusingprisma.onrender.com/",
  credentials: true
}));

app.get("/", (req, res) => {
  res.send("Route for home");
});

// Public routes: login and registration
app.use("/api/user", authRouter);

// Protected routes: JWT required
app.use("/api/movie", authenticateToken, movieRoutes);

app.use("/api/addtowatch", addToWatchRouter);

app.listen(port, async () => {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not defined");
    }

    await connectDB();

    console.log(`Server is running on port: ${port}`);
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
});
