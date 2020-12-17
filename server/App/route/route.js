module.exports = app => {
  const planet = require("../controller/controller.js");

app.get("/planet", planet.findAll)

//Get planet data
app.get("/planet/:idplanet", planet.findplanet);

};