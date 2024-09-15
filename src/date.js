//appendfile: Write to the exisisting file
//writeFile: Write to a new file
//rename: Rename the difile

var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

module.exports = {
  getDate: () => {
    return new Date()
  },
  getFS: (data) => {
    fs.appendFile('./sai.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    fs.writeFile('./sai.txt', 'This is new text', function (err) {
      if (err) throw err;
      console.log('Replaced!');
    });
    // fs.open('./sai.txt', 'w', function (err, file) {
    //   if (err) throw err;
    //   console.log('Saved!', file);
    // });
    // fs.rename('./saii.txt', 'sai.txt', function (err) {
    //   if (err) throw err;
    //   console.log('File Renamed!');
    // });

  },
  createFS: () => {
    var rs = fs.createReadStream('./sai.txt');
    rs.on('open', function () {
      console.log('The file is open');
    });
  },
  emitts: () => {
    var myEventHandler = function () {
      console.log('I hear a scream!');
    }
    //Assign the event handler to an event:
    eventEmitter.on('scream', myEventHandler);

    //Fire the 'scream' event:
    eventEmitter.emit('scream'); 
  }
}