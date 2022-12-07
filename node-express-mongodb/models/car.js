import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    posti: {
      type: String,
      require: true,
    },
    cambio: {
      type: String,
      require: true,
    },
    alimentazione: {
      type: String,
      require: true,
    },
    consumokm: {
      type: String,
      require: true,
    },
    prezzo: {
      type: String,
      require: true,
    },
    marca: {
      type: String,
      require: true,
    },
    modello: {
      type: String,
      require: true,
    },
    categoria: {
      type: String,
      require: true,
    },
    anno: {
      type: String,
      require: true,
    },
    chilometri: {
      type: String,
      require: true,
    },
    cv: {
      type: String,
      require: true,
    },
    kw: {
      type: String,
      require: true,
    },
    nproprietari: {
      type: String,
      require: true,
    },
    colore: {
      type: String,
      require: true,
    },
    cilindrata: {
      type: String,
      require: true,
    },
    porte: {
      type: String,
      require: true,
    },
    versione: {
      type: String,
      require: true,
    },
    classe: {
      type: String,
      require: true,
    },
    citta: {
      type: String,
      require: true,
    },
    immagini: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export const Car = mongoose.model("Car", carSchema);
