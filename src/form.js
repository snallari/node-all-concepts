var nodemailer = require('nodemailer');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

const email = () => {
  var transporter = nodemailer.createTransport({
    service: 'yopmail',
    auth: {
      user: 'snallari@yopmail.com',
      //pass: 'nallari90'
    }
  });

  var mailOptions = {
    from: 'snallari@yopmail.com',
    to: 'shrutinallari2@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("error", error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

const add = () => {
  return 5
}

const getDate = () => {
  return new Date()
}
const getFS = (data) => {
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

}
const createFS = () => {
  var rs = fs.createReadStream('./sai.txt');
  rs.on('open', function () {
    console.log('The file is open');
  });
}
const emitts = () => {
  var myEventHandler = function () {
    console.log('I hear a scream!');
  }
  //Assign the event handler to an event:
  eventEmitter.on('scream', myEventHandler);

  //Fire the 'scream' event:
  eventEmitter.emit('scream');
}

module.exports = { email, add, getDate, createFS, emitts, getFS }
