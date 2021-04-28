const express = require('express'); //express is a function
const app = express(); // app is an object

const grade = [0,1,2,3,4,5,6,7,8,9,10,11,12]

app.get('/grades/:index', (request, response) => {
  response.send(grades[request.params.index]);
})

app.listen(3000, ()=>{
  console.log("I am listening");
})