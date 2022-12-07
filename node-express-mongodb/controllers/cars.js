import { v4 as uuidv4 } from "uuid";
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

export const deleteCar = (req, res) => {
  const { id } = req.params;
  cars = cars.filter((car) => car.id != id);
  res.send(`auto con id ${id} è stata rimossa `);
};
export const updateCar = (req, res) => {
  const { id } = req.params;
  const { marca, modello, prezzo } = req.body;

  const carFind = cars.find((car) => car.id == id);

  if (marca) carFind.marca = marca;

  if (modello) carFind.marca = modello;

  if (prezzo) carFind.marca = prezzo;

  res.send(`auto con id ${id} è stata modificata `);
};
