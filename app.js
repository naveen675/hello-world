const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const birds = require('./birds')

app.use('/birds',birds);

users = {
  "naveen" : "Sai"
}
app.get('/', function (req, res) {
  
  res.send("hello");
});

app.get("/users/",function (req,res,next) {
  console.log("");
  //res.send("function A");
  next();
},
function (req,res) {

  res.send("function B");
}
)

app.get('/example', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});


app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});





