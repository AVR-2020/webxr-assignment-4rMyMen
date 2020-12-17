const sql = require("./db.js");

const Score = function(score) {
    this.time = score.time;
};

Score.create = (newscore, result) => {
  sql.query("INSERT INTO score SET ? ", newscore, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created score ", { id: res.newscore });
    result(null, { id: res.newscore });
  });
};

Score.getAll = result => {
  sql.query("SELECT * FROM score Order By time", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("score: ", res);
    result(null, res);
  });
};

// exports.findAllScore = (req, res) => {
//   sql.query("SELECT * FROM score ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// };

module.exports = Score;