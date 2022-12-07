import express from "express";

import { insertCar, getAllCars, getCarByID, deleteCar, updateCar } from "../controllers/cars.js";

const router = express.Router();

router.get("/", getAllCars);

router.post("/", insertCar);

router.get("/:id", getCarByID);

router.delete("/:id", deleteCar);

router.patch("/:id", updateCar);

export default router;
