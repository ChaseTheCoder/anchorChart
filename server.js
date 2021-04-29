const { request, response } = require('express');
const express = require('express'); //express is a function
const app = express(); // app is an object
const posts = require('./models/posts.js');
const bodyParser = require('body-parser');

// EJS Embedded JS
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended:false}));

app.use((request, response, next) => {
  console.log('I run for all routes');
  next();
})

// See posts(eventually)
app.get('/posts/', (request, response) => {
  response.render('show.ejs');
})
// Create new post
app.get('/posts/new', (request, response) => {
  response.render('new.ejs')
})
// Post new post
app.post('/fruits', (request, response) => {
  posts.push(request.body);
  response.redirect('/posts');
})

app.get('/posts/:index', (request, response) => {
  response.render('show.ejs', {
    post: posts[request.params.index]
  });
})

app.listen(3000, ()=>{
  console.log("I am listening");
})