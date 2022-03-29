const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('static'));


app.get('/', (req, res) => {
  
  res.send("hello");
});

app.get("/index",(req,res) => {
  res.send("Index");
})


app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});





