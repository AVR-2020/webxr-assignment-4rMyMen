const Planet = require("../model/modul.js");

exports.findAll = (req, res) => {
  Planet.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving planet."
      });
    else res.send(data);
  });
};

// Find planet
exports.findplanet = (req, res) => {
  Planet.findByPlanetId(req.params.idplanet, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found planet ${req.params.idplanet}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving planet " + req.params.idplanet
        });
      }
    } else res.send(data);
  });
};

// Find star
exports.findstar = (req, res) => {
  Star.findByStarId(req.params.idstar, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found planet ${req.params.idstar}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving planet " + req.params.idstar
        });
      }
    } else res.send(data);
  });
};