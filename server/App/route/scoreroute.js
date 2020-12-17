module.exports = app => {
    const score = require("../controller/scorecontroller.js");

  //Get planet data
  app.post("/score", score.create);

  app.get("/score", score.findAll);
  
  };