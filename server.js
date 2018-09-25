const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
const path = require('path');
console.log('kokokara')
app.get('/*', function(req, res){
  console.log(res);
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
console.log('kokomade')
console.log('Server listening on port 8080');
