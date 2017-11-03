var sleep = require('sleep');
var io = require('socket.io-client');
var socket = io.connect("http://163.44.165.68:8080");
var Cylon = require("cylon");
"use strict";

function send(string, data) {
  socket.emit(string, data);
}
Cylon.robot({
  connections: {
    neurosky: {
      adaptor: "neurosky",
      port: "COM3"
    }
  },

  devices: {
    headset: {
      driver: "neurosky"
    }
  },

  work: function(my) {
    my.headset.on("eeg", function(data) {
      send("eeg", data);
      console.log("Data:", data);
    });
  }
});

Cylon.start();
