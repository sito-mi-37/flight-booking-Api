const { Flights } = require("../models/Flight");
const { v4: uuid } = require("uuid");

// get all flights
exports.getAllFlights = (req, res) => {
    try {
      const flights = Flights;
      res.status(200).json({ message: "All flights", flights });
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  // get one flight
exports.getFlight = (req, res) => {
    try {
      const id = req.params.id;
      const flight = Flights.find((flight) => flight.id === id);
      if (!flight) {
        res.status(400).json("flight not found");
      } else {
        res.status(200).json({ message: "flight found", flight });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  // create a flight
exports.createFlight = (req, res) => {
    try {
      const { title, time, price, date } = req.body;
      const newFlight = {
        title,
        time,
        price,
        date,
        id: uuid(),
      };
      Flights.push(newFlight);
      res.status(200).json({ message: "flight created", flight: newFlight });
    } catch (error) {
      res.status(500).json(error.message);
    }
  };

  // update a flight
exports.updateFlight = (req, res) => {
    try {
      const { title, time, price, date } = req.body;
      const id = req.params.id;
      const flight = Flights.find((flight) => flight.id === id);
      flight.title = title;
      flight.time = time;
      flight.price = price;
      flight.date = date;
      if (flight) {
        res.status(200).json({ message: "flight updated", flight });
      } else {
        res.status(404).json({ message: "this flight does not exit" });
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


  // delete a flight
exports.deleteFlight = (req, res) => {
    try {
      const id = req.params.id;
      let flight = Flights.find((flight) => flight.id === id);
  
      if (flight) {
        Flights.splice(Flights.indexOf(flight), 1);
        res.status(200).json({ message: "flight is deleted" });
      } else {
        res.status(404).json({ message: "this flight does not exit" });
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
  