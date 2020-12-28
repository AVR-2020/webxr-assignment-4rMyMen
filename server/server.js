const express = require("express");
const bodyParser = require("body-parser");
var path = require('path');
const app = express();
// const fs =require('fs')
// const dir_cerfiticate = 'sslcert/'
// const privateKey  = fs.readFileSync(dir_certificate+'/server.key', 'utf8');
// const certificate = fs.readFileSync(dir_certificate+'/server.crt', 'utf8');
// const credentials = {key: privateKey, cert: certificate};
// var httpsServer = https.createServer(credentials, app);

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Connected OwO" });
// });

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../index.html'));
});

require("./App/route/route.js")(app);
require("./App/route/starroute.js")(app);
require("./App/route/scoreroute.js")(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});