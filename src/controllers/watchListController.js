
import { prisma } from "../config/db.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const addToWatchList = async (req, res) => {
  try {
    const { movieId, status, rating, notes } = req.body;

    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Authentication token required"
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    
    const userId = decoded.userId;

    if (!userId) {
      return res.status(401).json({
        message: "Invalid token payload"
      });
    }

    const movie = await prisma.movie.findUnique({
      where: { id: movieId }
    });

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found"
      });
    }


    const existingInWatchlist =
      await prisma.watchListItem.findUnique({
        where: {
          userId_movieId: {
            userId,
            movieId
          }
        }
      });

    if (existingInWatchlist) {
      return res.status(409).json({
        message: "Movie already exists in watchlist"
      });
    }


    const watchList = await prisma.watchListItem.create({
      data: {
        userId,
        movieId,
        status,
        rating,
        notes
      }
    });

    return res.status(201).json({
      message: "Movie added to watchlist",
      data: watchList
    });

  } catch (err) {
    console.error(err);

    if (
      err.name === "JsonWebTokenError" ||
      err.name === "TokenExpiredError" ||
      err.name === "NotBeforeError"
    ) {
      return res.status(401).json({
        message: "Invalid or expired token"
      });
    }

    return res.status(500).json({
      message: "Something went wrong"
    });
  }
};

const addToWatchMethods = { addToWatchList };

export default addToWatchMethods;
