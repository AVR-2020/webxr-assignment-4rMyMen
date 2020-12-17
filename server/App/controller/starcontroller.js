const Star = require("../model/smodul.js");

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