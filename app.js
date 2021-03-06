const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const fetch = require('node-fetch');

app.use(cors());

const logger =  (req,res,next) => {
  console.log("Logged")
  next();
}



app.use(logger);
let data = app.get('/github', function (req, res) {

  const axios = require('axios')

  fetch('https://api.github.com/users/naveen675/repos').then(
    (response) => { return response.json();
    }).then(
      (data) => {Object.entries(data).forEach(([key, value]) => {
        console.log(`${key} ${value["name"]}`);
    })
  })
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

app.get('/github', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});


app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});





