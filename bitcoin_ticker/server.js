const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const header = { "x-ba-key": "OWQ4ZTE1ZWU5NGM2NDEyOWI2NjhmZDQwYWRlZTU3NmE" };
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  request(
    {
      url: "https://apiv2.bitcoinaverage.com/indices/global/ticker/"+req.body.crypto+""+req.body.fiat,
      headers: { "x-ba-key": "OWQ4ZTE1ZWU5NGM2NDEyOWI2NjhmZDQwYWRlZTU3NmE" },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        console.log(data.last);

        res.send(
          "<h1>" +
            req.body.crypto +
            " to " +
            req.body.fiat +
            "=" +
            data.last +
            "</h1>"
        );
      }
    }
  );
});
app.listen(3000, function () {
  console.log("server started on port 3000");
});
