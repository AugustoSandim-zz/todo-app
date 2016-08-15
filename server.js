var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.all('/*', function(request, response){
  response.send('\
      <!DOCUMENT html>\
      <html>\
      <head>\
        <title>MEAN ToDo App</title>\
        <base href="/">\
      <head>\
      <body>\
        <div ui-view></div>\
        <script src="bundle.js"></script>\
      </body>\
      </html>\
  ');
});

app.listen(PORT, function() {
  console.log('Server running in ' + PORT);
});