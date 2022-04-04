const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


users = {
  "naveen" : "Sai"
}
app.get('/', (req, res) => {
  
  res.send("hello");
});

app.get("/users/:userid",(req,res) => {
  console.log(users[req.params.userid]);
  res.send("Index");
})


app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});





