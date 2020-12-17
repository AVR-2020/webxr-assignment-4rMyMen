const Score = require("../model/scoremodul.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // post score
    const score = new Score({
      time: req.body.time
    });
  
    // Save score in the database
    Score.create(score, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating score."
        });
      else res.send(data);
    });
  };
  
exports.findAll = (req, res) => {
    Score.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving score."
        });
      else res.send(data);
    });
  };