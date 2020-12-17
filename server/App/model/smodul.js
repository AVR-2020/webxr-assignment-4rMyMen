const sql = require("./db.js");

const Star = function(star) {
    this.nama = star.nama;
    this.panjang_ekuator = star.panjang_ekuator;
    this.radius = star.radius;
    this.orbital_spd = star.orbital_spd;
    this.trivia = star.trivia; 
  };

Star.findByStarId = (idstar, result) => {
    sql.query(`SELECT * FROM star WHERE id = ${idstar}`, (err, res) => {
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

module.exports = Star;