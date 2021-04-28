const express = require('express'); //express is a function
const app = express(); // app is an object

app.get('/somedata', (reques, response) => {
  response.send('here is your information');
})

app.listen(3000, ()=>{
  console.log("I am listening");
})