module.exports = app => {
    const star = require("../controller/starcontroller.js");

  //Get planet data
  app.get("/star/:idstar", star.findstar);
  
  };