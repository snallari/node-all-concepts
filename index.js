var http = require('http');
var url = require('url');
var fs = require('fs');
//var { getDate, getFS, createFS,emitts } = require('./src/date')
var {email, add,getDate, getFS, createFS,emitts}=require('./src/form.js')

function main() {
    let date = getDate()
    let file = getFS("sai")
    let file2 = getFS("sairam")
    let create=createFS()
    let emit=emitts()
    // //let form=createForm()
    let emailSender=email()
    console.log("sai",date, file, file2, create)
    // fs.unlink('./sai.txt', function (err) {
    //     if (err) throw err;
    //     console.log('File deleted!');
    // });
}

main()


http.createServer(function (req, res) {
      var q = url.parse(req.url, true).query;
      var txt = q.year + "its time you shine" + q.month+q.date;
      res.write(txt,'Hello World!');
      res.end(txt,'Hello World!');
    // fs.readFile('./index.html', function (err, data) {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     return res.end();
    // });

}).listen(8000);