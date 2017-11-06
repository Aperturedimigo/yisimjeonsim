try {
  var sleep = require('sleep');
  var io = require('socket.io-client');
  var socket = io.connect("http://163.44.165.68:8080");
  var Cylon = require("cylon");
  var wave = null
  var d = null "use strict";

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
      my.headset.on("attention", function(data) {
        if (data < 100 && data != 0) {
          console.log("attention:", data);
          socket.emit("attention", data);
          socket.on('attention', function(data) {
            if (data != 'success') {
              throw new Exception("errno", "Network Error");
            }
          });
          sleep.msleep(1300);
        } else {
          console.log("trash");
        }
      });
    }
  });

  Cylon.start();
} catch(e) {
}
