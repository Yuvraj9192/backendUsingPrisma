import express from "express";
import {getAllMovies} from "../controllers/movieControllers.js";

const movieRoutes = express.Router();

movieRoutes.get("/home", getAllMovies);

export default movieRoutes;