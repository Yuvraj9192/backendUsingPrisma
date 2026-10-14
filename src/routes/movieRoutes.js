import express from "express";
import movieMethods from "../controllers/movieControllers.js";

const movieRoutes = express.Router();

movieRoutes.get("/", movieMethods.getAllMovies);

export default movieRoutes;