// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./models/comment');

// Create app
const app = express();

// Set up body parser
app.use(bodyParser.json());

// Connect to database
mongoose.connect('mongodb://localhost:27017/commentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create home route
app.get('/', (req, res) => {
  res.send('This is the home route');
});

// Create route to get all comments
app.get('/comments', (req, res) => {
  Comment.find({}).then((comments) => {
    res.json(comments);
  });
});

// Create route to get a comment by id
app.get('/comments/:id', (req, res) => {
  Comment.findOne({ _id: req.params.id }).then((comment) => {
    res.json(comment);
  });
});

// Create route to post a comment
app.post('/comments', (req, res) => {
  Comment.create(req.body).then((comment) => {
    res.json(comment);
  });
});

// Create route to update a comment
app.put('/comments/:id', (req, res) => {
  Comment.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Comment.findOne({ _id: req.params.id }).then((comment) => {
      res.json(comment);
    });
  });
});

// Create route to delete a comment
app.delete('/comments/:id', (req, res) => {
  Comment.findByIdAndDelete({ _id: req.params.id }).then((comment) => {
    res.json(comment);
  });
});

// Set up port
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});