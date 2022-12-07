import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import carsRoutes from "./routes/cars.js";

const app = express();
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb://localhost:27017/carapi";

app.use(express.json());
app.use(cors());
app.use("/cars", carsRoutes);
app.get("/", (req, res) => res.send("benvenuto nella homepage"));

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port: ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
