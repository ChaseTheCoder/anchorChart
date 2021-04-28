const express = require('express'); //express is a function
const app = express(); // app is an object
const posts = require('./models/posts.js');

app.set('view engine', 'ejs');

app.get('/posts/', (request, response) => {
  response.render('show.ejs');
})

app.get('/posts/:index', (request, response) => {
  response.render('show.ejs', {
    post: posts[request.params.index]
  });
})

app.listen(3000, ()=>{
  console.log("I am listening");
})