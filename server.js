var express = require('express')
var bodyParser = require('body-parser')
var powerOff = require('power-off');

var server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(express.static("./public"))

server.post("/shutdown", (req, res, next) => {

    powerOff(function (err, stderr, stdout) {
        if (!err && !stderr) {
            return console.log(stdout);
        }
        res.send("shutting down...")
    });
})

server.listen(8000, () => { console.log("Server is running") })