import { mongoose } from "mongoose";
import { Car } from "../models/car.js";

let cars = [];

export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getCarByID = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: "id non idoneo" });
  try {
    const car = await Car.findById(id);
    res.status(200).json(car);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const insertCar = async (req, res) => {
  const car = req.body;
  const newCar = new Car(car);
  try {
    await newCar.save();
    res.satus(201).json(newCar);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deleteCar = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: "id non idoneo" });
  try {
    await Car.findByIdAndDelete(id);
    res.status(200).json({ message: "car eliminata con successo" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateCar = async (req, res) => {
  const { id } = req.params;
  const data = { ...req.body };
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: "id non idoneo" });
  try {
    const car = await Car.findByIdAndUpdate(id, data);
    res.status(200).json(car);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
