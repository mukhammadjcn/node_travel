const Travel = require("../models/Travel.model");

// Method: GET
// Description: Get all travel books
const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();

    res.status(200).json({
      message: "succes",
      travels,
    });
  } catch (error) {
    res.send(error);
  }
};

// Method: GET
// Description: Get one travel books
const getTravelByID = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);

    if (!travel) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    return res.status(200).json({
      message: "succes",
      travel,
    });
  } catch (error) {
    res.send(error);
  }
};

// Method: POST
// Description: Add new travel books
const addTravelBook = async (req, res) => {
  try {
    const { title, image, description } = req.body;

    const newTravel = await Travel.create({
      title,
      image,
      description,
    });

    res.status(201).json({
      message: "succes",
      newTravel,
    });
  } catch (error) {
    res.send(error);
  }
};

// Method: PUT
// Description: Edit travel book by ID
const updateTravelBook = async (req, res) => {
  try {
    const { title, image, description } = req.body;

    const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, {
      title,
      image,
      description,
    });

    res.status(200).json({
      message: "succes",
      updatedTravel,
    });
  } catch (error) {
    res.send(error);
  }
};

// Method: DELETE
// Description: REmove travel book by ID
const removeTravelBook = async (req, res) => {
  try {
    await Travel.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "DELETED",
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllTravels,
  getTravelByID,
  addTravelBook,
  updateTravelBook,
  removeTravelBook,
};
