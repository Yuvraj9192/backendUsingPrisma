import express from "express";
import addToWatchMethods from "../controllers/watchListController.js";

const addToWatchRouter = express().router;

addToWatchRouter.post("/", addToWatchMethods.addToWatchList);

export default addToWatchRouter;