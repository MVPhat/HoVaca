import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";

const router = express.Router();

//create

//method 1
// router.post("/", async (req, res) => {
//   const newHotel = new Hotel(req.body); //get request from ./models/Hotel.js

//   try {
//     const savedHotel = await newHotel.save(); // save ok
//     res.status(200).json(savedHotel); // response 200
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//method 2
router.post("/", createHotel);

//update
router.put("/:id", updateHotel);

//delete
router.delete("/:id", deleteHotel);

//get
router.get("/:id", getHotel);

//get all
router.get("/", getHotels);

export default router;
