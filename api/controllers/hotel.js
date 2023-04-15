import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body); //get request from ./models/Hotel.js

  try {
    const savedHotel = await newHotel.save(); // save ok
    res.status(200).json(savedHotel); // response 200
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ); // save ok
    res.status(200).json(updatedHotel); // response 200
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(
      req.params.id,
      { $set: req.body },
      { new: true }
    ); // save ok
    res.status(200).json("Hotel has been deleted"); // response 200
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id); // save ok
    res.status(200).json(hotel); // response 200
  } catch (err) {
    next(err);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find(); // save ok
    res.status(200).json(hotels); // response 200
  } catch (err) {
    next(err);
  }
};
