const express = require('express');
const router = express.Router();
const Todo = require('./todo');

// Get all To Do items
router.get('/todos', function(req, res) {
  Todo.find({}, function(err, todos) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(todos);
    }
  });
});

// Create a new To Do item
router.post('/todos', function(req, res) {
  const newTodo = new Todo({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed
  });

  newTodo.save(function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: 'To Do item created successfully' });
    }
  });
});

// Update a To Do item
router.put('/todos/:id', function(req, res) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function(err, todo) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: 'To Do item updated successfully' });
    }
  });
});

// Delete a To Do item
router.delete('/todos/:id', function(req, res) {
  Todo.findByIdAndRemove(req.params.id, function(err, todo) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: 'To Do item deleted
