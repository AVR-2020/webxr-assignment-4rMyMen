const sql = require("./db.js");

const Planet = function(planet) {
   this.nama = planet.nama;
   this.panjang_ekuator = planet.panjang_ekuator;
   this.radius = planet.radius;
   this.jarak_matahari = planet.jarak_matahari;
   this.temperature = planet.temperature;
   this.orbital_spd = planet.orbital_spd;
   this.trivia = planet.trivia; 
 };

Planet.getAll = result => {
    sql.query("SELECT * FROM planet", (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
    }
  
    console.log("planet: ", res);
    result(null, res);
    });
};

Planet.findByPlanetId = (idplanet, result) => {
    sql.query(`SELECT * FROM planet WHERE id = ${idplanet}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found planet: ", res[0]);
        result(null, res[0]);
        return;
      }

      result({ kind: "404" }, null);
    });
  };

  module.exports = Planet;